const express = require("express");
const bodyParser = require("body-parser");
let student = require("./index.js");

const app = express();

app.use(bodyParser.urlencoded());

app.use("/aluno", student);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Fluminense"));
