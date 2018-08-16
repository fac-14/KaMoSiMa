// const querystring = require('querystring');
const bcrypt = require('bcryptjs');

const hashPassword = (password, callback) => {
  bcrypt.hash(password, 10, callback);
};

const comparePasswords = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashedPassword, function (err, res) {
    if (err) {
      console.log('booooooooooo')
      callback(err)
    } else {
      console.log('achievement')
      callback(null, res);
    }
  });
};


module.exports = { hashPassword, comparePasswords }