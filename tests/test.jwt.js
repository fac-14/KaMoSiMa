const tape = require("tape");
const auth = require("../src/jwt");

tape("check tape is working - smoke test", t => {
  t.equal(2 + 2, 4, "2+2=4");
  t.end();
});

tape("check we can sign a jwt token", t => {
  auth.sign();
});

tape("check we can validate a jwt token", t => {
  auth.validate();
});
