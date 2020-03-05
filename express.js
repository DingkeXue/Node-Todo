// express 框架
const express = require("express");
const fs = require("fs");

const server = express();

// 使用ejs模板，设置视图引擎
server.set("view engine", "ejs");

// 使用外部样式
server.use("/assets", express.static("assets"));

server.get("/", (req, res) => {
	res.render("index");
})

server.get("/contact", (req, res) => {
	res.render("contact");
})

// ejs
server.get("/profile/:id", (req, res) => {
	res.render("detail.ejs", {name: "heloo"});
})

server.listen(8080, "localhost");