const http = require('http');
const fs = require('fs');
const pg = require('pg');
const querystring = require('querystring');
const mime = require('mime-types');
const path = require('path');
const dbQuery = require('./dbQueries');

const buildPath = (mypath) => {
    return path.join(__dirname, '..', mypath);
}

const router = (request, response) => {
    const endpoint = request.url.split('/')[1];
    const extension = request.url.split('/')[2];
    console.log('request.url', request.url);
    console.log('endpoint', endpoint);
    console.log('extension', extension);

    if (endpoint === '') {
        fs.readFile(__dirname + '/../public/index.html', (err, file) => {
            if (err) {
                response.writeHead(500, { 'content-type': 'text/plain' });
                response.end('file not found, sry');
            } else {
                response.writeHead(200, { 'content-type': 'text/html' });
                response.end(file);
            }
        });
    } else if (request.url.includes('public')) {
        fs.readFile(buildPath(request.url), (err, file) => {
            console.log("buildPath ", buildPath(request.url));
            if (err) {
                response.writeHead(500, { 'content-type': 'text/plain' });
                response.end('server error');
            }
            response.writeHead(200, { 'content-type': mime.lookup(request.url) });
            response.end(file);
        });

    } else if (endpoint === 'spots') {
        dbQuery.getDoggo((err, res) => {
            if (err) {
                response.writeHead(500, { 'content-type': 'text/plain' });
                response.end('server error');
            }
            response.writeHead(200, { 'content-type': mime.lookup('json') });
            response.end(JSON.stringify(res));
        });

    }

    else {
        response.writeHead(404, { 'content-type': 'text/html' });
        response.end('Page doesn´t exist');
    }
}






module.exports = router;