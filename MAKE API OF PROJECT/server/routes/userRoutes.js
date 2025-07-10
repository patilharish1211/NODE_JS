const express = require('express');
const bcrypt = require('bcrypt');
const authenticator = require('../Middleware/authenticator');
const validator = require('../Middleware/validator');
const userLogger = require('../Middleware/userLogger');
const UserModel = require('../models/user.model');

const userRoutes = express.Router();

// Register user
userRoutes.post('/signup', async (req, res) => {
  const { username, email, dob, role, location, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ username, email, dob, role, location, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Login user
userRoutes.post('/login', authenticator, userLogger, (req, res) => {
  res.status(200).json({ message: `Welcome, ${req.user.username}` });
});

// Get all users (Admin only)
userRoutes.get('/users', authenticator, validator, async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving users' });
  }
});

// Update user (Admin only)
userRoutes.put('/users/:id', authenticator, validator, async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// Delete user (Admin only)
userRoutes.delete('/users/:id', authenticator, validator, async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

module.exports = userRoutes;
