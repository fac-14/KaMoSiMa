const test = require('tape');
const router = require('../src/router');
const supertest = require('supertest');

test('check tape is working', (t) => {
  t.equal(1, 1, 'One equals one except when Big Brother is watching');
  t.end();
});

test('home route', (t) => {
  supertest(router)
    .get('')
    .expect(200)
    .expect('content-type', /html/)
    .end((err, res) => {
      t.error(err)
      t.equal(res.status, 200, 'response status should be 200')
      t.end();
    });
});

test('check status code 404', (t) => {
  supertest(router)
    .get('/myerrordog')
    .expect(404)
    .expect('content-type', /html/)
    .end((err, res) => {
      t.error(err)
      t.equal(res.status, 404, 'response status should be 404')
      t.equal(res.text, 'Page doesn´t exist', 'response should contain Page doesn´t exist')
      t.end();
    });
});

test('check if public assets are loading', (t) => {
  supertest(router)
    .get('/public/main.css')
    .expect(200)
    .expect('content-type', /css/)
    .end((err, res) => {
      t.error(err)
      t.equal(res.status, 200, 'response status should be 200')
      t.end();
    });
});