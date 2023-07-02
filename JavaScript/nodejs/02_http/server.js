/*
HTTP: protocolo de comunicacao web

-Verbos:
*GET: solicita dados
*POST:cadastrar dados
*PUT/PATCH: atualizar algum dado
*DELETE: deletar algum dado

STATUS: 100(respostas ao cliente), 200(requisicao proocessada com sucesso), 300(mensagens de redirecionamento), 400(mensagens de erro)
*/

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.statusCode = 200; //200: everything worked on
  res.end("<h1>Hello, Node.JS</h1>");
});

server.listen(3000, () => {
  console.log("Servidor ativo!");
});
