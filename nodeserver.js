let http = require('http');
let fs = require('fs');


http.createServer(function(req, res){
	let file = ('./index.html');
	fs.readFile(file, function(err, data){
		res.writeHead(200, {'Content-type' : 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);