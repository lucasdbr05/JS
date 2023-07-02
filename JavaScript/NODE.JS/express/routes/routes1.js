const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

let alunos = [
  { id: 0, nome: "Lucas" },
  { id: 1, nome: "Cano" },
  { id: 2, nome: "Ganso" },
  { id: 3, nome: "Arias" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/alunos", (req, res) => {
  res.json(JSON.stringify(alunos));
});

app.get("/aluno", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  let aluno = alunos[req.query.id];

  res.json(aluno);
});

// app.get("/aluno/:id", (req, res)=> {
//     console.log(req.params.id)
//     let aluno = alunos[req.params.id]

//     res.json(aluno)
// })

app.listen(3000, () => console.log("Fluminense"));
