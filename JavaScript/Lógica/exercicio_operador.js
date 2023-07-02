let first_num = window.prompt("Primeiro número: ");
let second_num = window.prompt("Segundo número: ");

first_num = parseFloat(first_num);
second_num = parseFloat(second_num);

let text =
  "Adição: " +
  (first_num + second_num) +
  "\nSubtração: " +
  (first_num - second_num) +
  "\nMultiplicação: " +
  first_num * second_num +
  "\nDivisão: " +
  first_num / second_num;

console.log(text);
window.alert(text);
