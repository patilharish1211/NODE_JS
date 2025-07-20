const jwt = require('jsonwebtoken');
const { Usermodel } = require('../model/User.model');

const Auth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(400).json({ message: "Login first" });
  }
  jwt.verify(token, '1234', async (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    const UserAuth = await Usermodel.findById(decoded.id);
    if (!UserAuth) {
      res.status(400).json({ message: "Something Went wrong" })
    }
    next()
  });
};

module.exports = Auth;
