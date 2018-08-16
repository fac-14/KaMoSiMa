const tape = require("tape");
const { auth, secret } = require("../src/jwt");

console.log(secret);

tape("check tape is working - smoke test", t => {
  t.equal(2 + 2, 4, "2+2=4");
  t.end();
});

tape("check we can sign a jwt token", t => {
  const payload = { name: "brymon" };
  const options = { noTimestamp: true };
  const actual = auth.sign(payload, options);
  const expected =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYnJ5bW9uIn0.rV8ENoMSTJjghzQPv_KURN6WFVwistnhB0Xl10iDBkg";
  t.equal(actual, expected, "returnes the data as jwt token");
  t.end();
});

tape("check we can validate a jwt token", t => {
  const payload = auth.sign({ name: "brymon" }, { noTimestamp: true });
  const actual = auth.validate(payload);
  const expected = { name: "brymon" };
  t.deepEquals(actual, expected, "Decodes a jwt token with our server secret");
  const badToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYnJ5bW9uIn0.cSCkoIqp_e2uL-Sn_hpNB9H2Pr0UPJMAgHzkH_8T5eQ";
  t.end();
});
