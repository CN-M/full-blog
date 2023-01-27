/* eslint-disable object-shorthand */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import User model
const User = require('../models/User');

// Import JWT secret
const { JWT_SECRET } = process.env;

// Generate JWT
const generateToken = (id) => jwt.sign({ id }, JWT_SECRET, { expiresIn: '30d' });

// Display All Users // GET // ADMIN ONLY
exports.showUsers = async (req, res) => {
  const users = await User.find({}, 'username email first_name last_name -_id');

  if (users.length < 1) {
    res.status(400);
    throw new Error('No Users to display');
  } else {
    res.status(200).json(users);
  }
};

// Display Single User // GET // ADMIN ONLY
exports.showSingleUser = async (req, res) => {
  const { username } = req.params;

  const user = await User.findOne({ username }, 'first_name last_name username email -_id');

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  } else {
    res.status(200).json(user);
  }
};

// Register user // POST
exports.registerUser = async (req, res) => {
  const {
    first_name, last_name, password, role,
  } = req.body;

  const username = req.body.username.toLowerCase();
  const email = req.body.email.toLowerCase();

  // Check if all fields are filled out
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('fill in all fields');
  }

  // Check if Email already has account
  const userEmailTaken = await User.findOne({ email });
  if (userEmailTaken) {
    res.status(400);
    throw new Error('Email already registered');
  }

  // Check if Username already taken
  const usernameTaken = await User.findOne({ username });
  if (usernameTaken) {
    res.status(400);
    throw new Error('Username already taken');
  }

  // Hash password and create user account
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    first_name,
    last_name,
    email,
    role,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      username,
      first_name,
      last_name,
      email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
};

// Login User // POST
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

// Update User Info // PUT // ADMIN ONLY
exports.updateUser = async (req, res) => {
  const { account } = req.params;
  const username = req.body.username.toLowerCase();
  const {
    first_name, last_name, profilePic, email,
  } = req.body;

  const user = await User.findOne({ username: account });

  if (user) {
    const updatedUser = await User.findByIdAndUpdate(
      user.id,
      {
        first_name, last_name, profilePic, username, email,
      },
      { new: true },
    ).select('-password');
    res.status(200).json(updatedUser);
  } else {
    res.status(400);
    throw new Error('User not found');
  }
};

// Delete User // DELETE // ADMIN ONLY
exports.deleteUser = async (req, res) => {
  const { account } = req.params;

  const user = await User.findOne({ account });

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  } else {
    res.status(200).json(`User '${user.username}' deleted`);
    await user.deleteOne();
  }
};
