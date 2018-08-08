const http = require('http');
const fs = require('fs');
const pg = require('pg');
const querystring = require('querystring');

const router = (request, response) => {
    const endpoint = request.url.split('/')[1];

    if (endpoint === '') {
        fs.readFile(__dirname + '/../public/index.html', (err, file) => {
            if (err) {
                response.writeHead(500, { 'content-type': 'text/html' });
                response.end('file not found, sry');
            } else {
                response.writeHead(200, { 'content-type': 'text/html' });
                response.end(file);
            }
        });
    } else {
        response.writeHead(500, { 'content-type': 'text/html' });
        response.end('No page');
    }
}






module.exports = router;