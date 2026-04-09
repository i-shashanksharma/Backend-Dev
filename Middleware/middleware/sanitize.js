const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

function sanitizeMiddleware(app) {
  app.use(xss());
  app.use(mongoSanitize());
}

module.exports = sanitizeMiddleware;