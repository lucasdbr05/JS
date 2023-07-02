const http = require("http");

//req: requisção (aquilo que é processado ao fazer uma requisição)
//res: resposta  (aquilo que é entregue após fazer uma requisição)
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello Node!</h1>");
  })
  .listen(3000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Servidor rodando na porta 3000");
    }
  });
