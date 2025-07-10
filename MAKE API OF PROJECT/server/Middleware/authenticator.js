const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');


const authenticator = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

    req.user = user; // Attach user details to the request
    next();
  } catch (error) {
    res.status(500).json({ error: 'Server error during authentication' });
  }
};

module.exports = authenticator;
