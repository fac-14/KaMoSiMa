const { hashPassword, comparePasswords } = require('../src/bcrypt')
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
    t.end();
  })
});

tape('check passwords correct', (t) => {
  hashPassword(password, (err, res) => {
    t.equal(err, null, 'err should be nully');
    comparePasswords(password, res, (err, correct) => {
      t.equal(err, null, 'err should be very null')
      t.equal(correct, true);
      t.end();
    })
  })
});

tape('check passwords incorrectcorrect', (t) => {
  hashPassword(password, (err, res) => {
    t.equal(err, null, 'err should be nully');
    comparePasswords('notpassword', res, (err, correct) => {
      t.equal(err, null, 'err should be very null')
      t.equal(correct, false);
      t.end();
    })
  })
});