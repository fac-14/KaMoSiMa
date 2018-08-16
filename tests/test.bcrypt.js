const hashPassword = require('../src/bcrypt')
const comparePasswords = require('../src/bcrypt')
const tape = require('tape');

const password = 'wehey';

tape('check tape is working', (t) => {
  t.equal(2 + 2, 4, '2+2=4');
  t.end();
});

tape('check bcrypt is hashing', (t) => {
  hashPassword(password, (err, res) => {
    t.equal(err, null, 'error should be null');
    t.equal(res.substring(0, 4), '$2a$');
    console.log(res.substring(0, 4));
    t.end();
  })
});

tape('check if passwords are being validated correctly', (t) => {
  hashPassword(password, (err, hashedPassword) => {
    t.equal(err, null, 'error should be 0');

    comparePasswords(password, hashedPassword, (err, correct) => {
      t.equal(err, null, 'error should be 0');
      t.equal(correct, true, 'validated correctly!');
      t.end();
    });
  });
});