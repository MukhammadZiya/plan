console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const https = require("http");

//1  Kirish
app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//2 Session
//3  Views
app.set("views", "views");
app.set("view engine", "ejs");

//4  Routing
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("harid");
});

const server = https.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port ${PORT}`);
});
