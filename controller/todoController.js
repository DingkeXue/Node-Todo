var bodyParser = require("body-parser");
var urlencodeParser = bodyParser.urlencoded({extended: false});

// 模拟数据
var data = [
	{item: "hello world"},
	{item: "hello 2020小米公司校园招聘正在进行"},
	{item: "2020小米公司校园招聘正在进行 world"},
	{item: "2020小米公司校园招聘正在进行ld"},
	{item: "2020小米公司校园招聘正在进行"}
];

module.exports = function(app) {
	// 获取数据
	app.get("/todo", function(req, res) {
		res.render("todo", {data: data});
	})
	
	// 处理上传过来的数据
	app.post("/todo", urlencodeParser, function(req, res) {
		// coding
		data.unshift(req.body);
	})
	
	// 删除数据
	app.delete("/todo/:content", function(req, res) {
		// coding 
		data = data.filter(function(item) {
			return item.item !== req.params.content;
		})
	})
}