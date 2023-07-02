const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use("/my_site", express.static(path.join(__dirname, "client"))); //path: current_dir +./client

//Midleware(serve para organizar o codigo ao dividi-lo em diferentes partes)
let consoleMethod = (req, res, next) => {
  console.log(req.method);
  next();
};

let consoleBody = (req, res, next) => {
  console.log(req.body);
  next();
};

//use: execute the midleware for any method(get. post. put or delete)
app.use("/", consoleMethod);
app.use("/", bodyParser.json());
app.use("/", consoleBody);

app.get("/", (req, res) => {
  res.type("html");
  res.send("<h1>Hello Node from GET</h1>");
});
app.get("/", consoleMethod);

app.post("/", (req, res) => {
  res.type("html");
  res.send("<h1>Hello Node from POST</h1>");
});
app.post("/", consoleMethod);

app.put("/", (req, res) => {
  res.type("html");
  res.send("<h1>Hello Node from PUT</h1>");
});

app.delete("/", (req, res) => {
  res.type("html");
  res.send("<h1>Hello Node from DELETE</h1>");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
