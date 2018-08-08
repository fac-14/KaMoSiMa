const tape = require('tape');

tape('check tape is working', (t) => {
  t.equal(1, 1, 'One equals one except when Big Brother is watching');
  t.end();
});