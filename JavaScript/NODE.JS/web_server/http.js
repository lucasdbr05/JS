const http = require("http");
const url = require("url");
const fs = require("fs");

function handleFile(req, res, callback) {
  let path = url.parse(req.url).pathname;
  if (path == "" || path == "/") {
    path = "/index.html";
  }

  let fileName = "." + path;

  fs.readFile(fileName, (err, data) => {
    if (err) {
      if (callback) {
        if (!callback(req, res)) {
          res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
          res.end("<h1>Page Not Found</h1>");
        }
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
}

function handleRequest(req, res) {
  let path = url.parse(req.url).pathname;

  let method = req.method;
  console.log(method);

  if (method == "PUT") {
    res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
  }

  if (path == "/teste") {
    res.end("<h1>Test</h1>");
    return true;
  }
  return false;
}

//req: requisção (aquilo que é processado ao fazer uma requisição)[GET, POST, PUT, DELETE]
//res: resposta  (aquilo que é entregue após fazer uma requisição)[100',200', 300', 400', 500' familys][header, status, body]
http
  .createServer((req, res) => {
    handleFile(req, res, handleRequest);
  })
  .listen(3000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Servidor rodando na porta 3000");
    }
  });
