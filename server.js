const fs = require("fs");
// 创建服务器
const http = require("http");

// 读写文件流
const myReadStream = fs.createReadStream("read.json");
const myWriteStream = fs.createWriteStream("writeStream.txt");

const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-type": "application/json"});
	myReadStream.pipe(res);
})

server.listen(8888, "localhost");