const tape = require("tape");
const {auth, secret} = require("../src/jwt");

tape("check tape is working - smoke test", t => {
  t.equal(2 + 2, 4, "2+2=4");
  t.end();
});

tape("check we can sign a jwt token", t => {
  const payload = {name: 'brymon'};
  const actual = auth.sign(payload).split('.')[0];
  const expected = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
  t.equal(actual, expected, 'returnes the data as jwt token');
  t.end();
});

tape("check we can validate a jwt token", t => {
  auth.validate();
  t.end();
});
