const fs = require('fs');

const userLogger = (req, res, next) => {
  const { username, role } = req.user;

  const logMessage = `User: ${username}, Role: ${role}, Logged in at: ${new Date().toISOString()}\n`;
  fs.appendFile('./logs/log.txt', logMessage, (err) => {
    if (err) console.error('Error logging user activity:', err);
  });

  next();
};

module.exports = userLogger;