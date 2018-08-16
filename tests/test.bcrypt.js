const hashPassword = require('../src/bcrypt')
const tape = require('tape');

tape('check tape is working', (t) => {
  t.equal(2 + 2, 4, '2+2=4');
  t.end();
});

tape('check bcrypt is hashing', (t) => {
  const password = 'wehey';
  hashPassword(password, (err, res) => {
    t.equal(err, null, 'error should be null');
    t.equal(res.substring(0, 4), '$2a$');
    console.log(res.substring(0, 4));
    t.end();
  })
});