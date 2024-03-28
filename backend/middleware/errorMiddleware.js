const createError = require('http-errors');
const { NODE_ENV } = process.env;

exports.cacth404 = (req, res, next) => next(createError(404));

exports.errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
    stack: NODE_ENV === 'production' ? null : err.stack,
  });
};
