var path = require('path');
var temp = require('./temp');
var express = require('express');


var express = require('express')
var app = express()

express.static(path.resolve('./public'));

app.get('/', function(req, res){
    res.sendFile(path.resolve('./public/index.html'));
});

app.get('/ajax/endpoint', function (req, res) {
    res.send(JSON.stringify(temp.test()));
});

console.log('localhost:3000');
app.listen(3000);

// http.createServer(function (request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text/json',
//         'Access-Control-Allow-Origin' : '*'
//     });
//     // if (request.method === 'GET' && request.url == '/') {
//         console.log("A user made a request " + request.url);
//         response.writeHead(200, {"Context-Type":"text/plain" });
//         // response.write("Some Data");
//         response.end(JSON.stringify(temp.test()));
//     // } else {
//     //     response.writeHead(404, {"Content-Type": "text/plain"});
//     //     response.end("Error 404: Page not found!");
//     // }
// }).listen(8080);