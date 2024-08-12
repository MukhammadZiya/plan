console.log("web serverni boshlash");

const express = require("express");
const app = express();
const https = require("http");

//1  Kirish
app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//2 Session
//3  Views
app.set("views", "view");
app.set("view engine", "ejs");

//4  Routing

app.get("/hi", function (req, res) {
  res.end(`<h1 style="background : red">HELLO WORLDddd</h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1 style="background : red">Siz sovg'alar bo'limidasiz</h1>`);
});



const server = https.createServer(app);
let PORT = 3004;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port ${PORT}`);
});
