var fs = require('fs');

const logUser = (username) => {
    const logMessage = `${new Date().toISOString()} - Username: ${username}\n`;
  
    fs.appendFile("./log.txt", logMessage, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
    });
  };


  module.exports=logUser