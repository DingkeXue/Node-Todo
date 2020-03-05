module.exports = function(app) {
	// 获取数据
	app.get("/todo", function(req, res) {
		res.render("todo");
	})
	
	// 上传数据
	app.post("/todo", function(req, res) {
		// coding
	})
	
	// 删除数据
	app.delete("/todo", function(req, res) {
		// coding 
	})
}