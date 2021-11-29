// create node server protocol

let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function(req, res){
	fs.readFile('./about.html', (err, data)=>{
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(data);
		return res.end();
	})
}).listen(8080);