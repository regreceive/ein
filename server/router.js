const Router = require('koa-router');
const api = require('./controller');

const router = new Router();
router.post('/api/user/subscribe', api.subscribe);

module.exports = router;
