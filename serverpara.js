let http = require('http');
let url = require('url');
let fs = require('fs');


//Initialize the server with createServer() function and pass it another function with request and response parameters

http.createServer(function(req, res){
	let q = url.parse(req.url, true);
	let fileName = '.' + q.pathname;
	if(fileName === './') {
		fileName = './index.html';
	}
	console.log(fileName);
	fs.readFile(fileName, function(err, data){
		if(err) {
			res.writeHead(404, {'Content-Type' : 'text/html'});
			return res.end('404 Page Not Found');
		}
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);