console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const https = require("http");
const fs = require("fs");
const mongodb = require("mongodb");

const db = require("./server");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

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
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("somehting went wrong");
    } else {
      res.end("successfully added");
    }
  });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

app.get("/", function (req, res) {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja");
      }
    });
});

const server = https.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is running successfully on port ${PORT}, http://localhost:${PORT}`
  );
});
