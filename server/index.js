const minimist = require('minimist');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const onerror = require('koa-onerror');
const logger = require('koa-logger');
const router = require('./router');
const app = new Koa();

const args = minimist(process.argv.slice(2));

const host = args.host || 'localhost';
const port = parseInt(args.port, 10) || 8000;

onerror(app);
app.use(
  bodyParser({
    enableTypes: ['json', 'form', 'text'],
  }),
);

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx, next) => {
  await next();
  // `http://${HOST}:${DEFAULT_PORT}`
  ctx.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers':
      'x-requested-with, accept, origin, content-type',
    'Access-Control-Allow-Credentials': 'true',
  });

  if (ctx.request.method === 'OPTIONS') {
    ctx.response.status = 200;
  }
});

app.use(logger());

app.use(router.routes(), router.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

app.listen(port, host, () => {
  console.log('listen on ' + host + ':' + port);
});
