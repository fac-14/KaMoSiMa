// const querystring = require('querystring');
const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) reject(err)
      resolve(hash)
    });
  })
};

const comparePasswords = (password, hash) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(password, hash, (err, res) => {
      if (err) reject(err)
      resolve(res)
    })
  )
};

// const comparePasswords = (password, hashedPassword, callback) => {
//   bcrypt.compare(password, hashedPassword, function (err, res) {
//     if (err) {
//       console.log('booooooooooo')
//       callback(err)
//     } else {
//       console.log('achievement')
//       callback(null, res);
//     }
//   });
// };


module.exports = { hashPassword, comparePasswords }