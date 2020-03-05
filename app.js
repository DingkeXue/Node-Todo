const express = require("express");
const app = express();
const controller = require("./controller/todoController");

// 设置视图引擎
app.set("view engine", "ejs");
// 设置外部样式
app.use("/assets", express.static("assets"));

controller(app);

app.listen(8080, "localhost");