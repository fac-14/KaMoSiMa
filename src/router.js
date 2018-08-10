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
            response.end(JSON.stringify(res.rows));
        });
    } else if (endpoint === 'breeds') {
        dbQuery.breedDoggo((err, res) => {
            if (err) {
                response.writeHead(500, { 'content-type': 'text/plain' });
                response.end('server error');
            }
            response.writeHead(200, { 'content-type': mime.lookup('json') });
            response.end(JSON.stringify(res.rows));
        });
    } else if (endpoint === 'create-spots') {
        let postData = '';
        request.on('data', (chunk) => {
            postData += chunk;
        });
        request.on('end', () => {
            console.log(postData);
            const dogName = querystring.parse(postData).dogName;
            const dogBreed = querystring.parse(postData).dogBreed;
            const parkName = querystring.parse(postData).parkName;
            dbQuery.postDoggo(dogName, dogBreed, parkName, (err, res) => {
                if (err) {
                    response.writeHead(500, 'content-type : text/html');
                    response.end();
                }
                response.writeHead(302, { "Location": "/public/seedogs.html" });
                response.end();
            })
        });
    }

    else {
        response.writeHead(404, { 'content-type': 'text/html' });
        response.end('Page doesn´t exist');
    }
}

module.exports = router;