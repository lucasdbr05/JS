///ES Modules
import { label, input, br } from "./modulesjs/function.js";

console.log(label({ for: "fullname", textContent: "Nome Completo" }));
console.log(
  input({
    id: "fullname",
    name: "fullname",
    placeholder: "Digite seu nome completo...",
  })
);
console.log(br());

//CommomJS
const render = require("./modulesjs/render");
const store = require("./modulesjs/store");

console.log("Aplicação iniciada.");
render();
store();
console.log("Aplicação finalizada.");
