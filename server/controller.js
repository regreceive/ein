const Sequelize = require('sequelize');
const Subscribe = require('./modles/Subscribe');

exports.subscribe = async ctx => {
  const email = ctx.request.body.email;
  const request = ctx.request;
  const ip =
    request.header['x-real-ip'] || request.header['remote-host'] || request.ip;

  try {
    await Subscribe.create({ email, ip });
  } catch (e) {
    if (e instanceof Sequelize.ValidationError) {
      const { validatorKey, message } = e.errors[0];
      ctx.body = { info: message, status: validatorKey };
      return;
    }
  }
  ctx.body = { info: 'Create success', status: 'ok' };
};
