const config = require('config');
const logger = require('../utils/logger');

const { domain } = config.get('frontEnd');

function doSend(email, text) {
  logger.info(text);
  return Promise.resolve(true);
}

function sendResetPasswordEmail(email, fullName, token) {
  const text = `Hello ${fullName},`
  + '\nWe have received password reset request. '
  + `To do this, please proceed at ${domain}/#/auth/reset-password?reset_password_token=${token}`
  + '\nIf it wasn\'t you, take no action or contact support.'
  + '\n\nThank you,'
  + '\nSupport team.';

  return doSend(email, text);
}

module.exports = {
  sendResetPasswordEmail,
};
