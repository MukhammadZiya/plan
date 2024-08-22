const https = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://muhammadziyo:XYMkInIMi0GHlC6m@cluster0.a9dmi.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("MongoDB Connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = https.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(`The server is running successfully on port ${PORT},
http://localhost:${PORT}`);
      });
    }
  }
);
