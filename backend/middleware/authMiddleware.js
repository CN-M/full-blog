const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Import Secrets
const { JWT_SECRET, SECRET_NAME, SECRET_ROLE } = process.env;

exports.protect = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith('Bearer')) {
    try {
      // Get Token from bearer
      token = authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET);

      // Get user from token
      req.user = await User.findById(decoded.id).select('username email first_name last_name -_id');

      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not Authorized');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Authorized, no token');
  }
};

exports.guard = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith('Bearer')) {
    try {
      // Get Token from bearer
      token = authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET);

      // Get user from token
      req.user = await User.findById(decoded.id).select('username email first_name last_name -_id');
      if ((req.user.username !== SECRET_NAME) && (req.user.role !== SECRET_ROLE)) {
        res.status(401);
        throw new Error('Not Authorized Perform Task');
      }

      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not Authorized Perform Task');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Authorized, no token');
  }
};
