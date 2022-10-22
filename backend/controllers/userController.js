const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import User model
const User = require('../models/User');

// Import JWT secret
const { JWT_SECRET, SECRET_NAME, SECRET_ROLE } = process.env;

// Generate JWT
const generateToken = (id) => jwt.sign({ id }, JWT_SECRET, { expiresIn: '30d' });

// Display all users // GET // ADMIN ONLY
exports.showUsers = async (req, res) => {
  const { role, username } = req.user;
  const users = await User.find();

  if ((role !== SECRET_ROLE) && (username !== SECRET_NAME)) {
    res.status(401);
    throw new Error('Not authorized');
  }

  if (users.length < 1) {
    res.status(400);
    throw new Error('No Users to display');
  } else {
    res.status(200).json(users);
  }
};

// Register user // POST
exports.registerUser = async (req, res) => {
  const {
    first_name, last_name, email, password, role,
  } = req.body;

  const username = req.body.username.toLowerCase();

  // Check if all fields are filled out
  if (!username || !email || !password) {
  // if (!email || !password || !username) {
    res.status(400);
    throw new Error('fill in all fields');
  }

  // Check if email already has account
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('Email already registered');
  }

  // Hash password and create user account
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    first_name,
    last_name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      username,
      first_name,
      last_name,
      email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
};

// Loign user // POST
exports.loginUser = async (req, res) => {
  const { password } = req.body;

  const username = req.body.username.toLowerCase();

  // Check if all fields are filled out
  if (!username || !password) {
    res.status(400);
    throw new Error('fill in all fields');
  }

  // Log user in
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
};

// Delete Goal // DELETE // ADMIN ONLY
exports.deleteUser = async (req, res) => {
  const { role, username } = req.user;
  const { userid } = req.params;

  const user = await User.findById(userid);
  if ((role !== SECRET_ROLE) && (username !== SECRET_NAME)) {
    res.status(401);
    throw new Error('Not authorized');
  }

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  } else {
    res.status(200).json(`User ${user.username} deleted`);
    await user.deleteOne();
  }
};
