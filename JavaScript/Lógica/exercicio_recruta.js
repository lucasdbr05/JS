let first_name = window.prompt("Digite primeiro seu nome:");
let last_name = window.prompt("Digite seu sobrenome:");
let area = window.prompt("Campo de estudo:");
let birth = window.prompt("Ano de Nascimento:");

let text =
  first_name +
  " " +
  last_name +
  "\n Area de Estudo: " +
  area +
  "\n Nascimento: " +
  birth;

console.log(text);
window.alert(text);
