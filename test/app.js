const math = require("./module");
const EventEmitter = require("events");
const fs = require("fs");

class MyEmitter extends EventEmitter {}

// 实例化事件类
const myEmitter = new MyEmitter();

// 绑定事件
myEmitter.on("event", (num) => console.log(num));

// 绑定异步事件
myEmitter.on("event2", function() {
	setTimeout(function() {
		console.log(1);
	}, 2000);
})

myEmitter.emit("event2");

// 触发事件
myEmitter.emit("event", 0);

// 文件系统
// fs.readFile("readme.txt", (err, data) => {
// 	if (err) throw err;
// 	fs.writeFile("write.txt", data, (err) => {
// 		if(err) throw err;
// 		console.log("文件写入成功！");
// 	})
	
// 	// try{
// 	// 	fs.unlink("readme.txt", (err) => {
// 	// 		if(err) throw err;
// 	// 		console.log("删除成功！");
// 	// 	})
// 	// }catch(e){
// 	// 	//TODO handle the exception
// 	// 	console.log("文件不存在");
// 	// }
// })

// 创建、删除文件夹
// fs.mkdir("dir", (err) => {
// 	if(err) throw err;
// 	fs.readFile("readme.txt", (err, data) => {
// 		if(err) throw err;
// 		fs.writeFile("./dir/write.txt", data, (err) => {
// 			if(err) throw err;
// 			console.log("写入成功！");
// 		})
// 	})
// })

fs.unlink("./dir/write.txt", (err) => {
	if(err) throw err;
	fs.rmdir("dir", (err) => {
		if(err) throw err;
		console.log("删除成功！");
	})
})