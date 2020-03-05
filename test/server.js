const fs = require("fs");
// 创建服务器
const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url);
	if(req.url === "/home" || req.url === "/") {
		res.writeHead(200, {"Content-type": "text/html"});
		fs.createReadStream("index.html").pipe(res);
	} else if(req.url === "/contact") {
		res.writeHead(200, {"Content-type": "text/html"});
		fs.createReadStream("contact.html").pipe(res);
	} else {
		res.writeHead(200, {"Content-type": "text/html"});
		fs.createReadStream("./api/more.html").pipe(res);
	}
})

server.listen(8888, "localhost");