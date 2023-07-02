let idade = window.prompt("Digite sua idade: ");

idade = parseFloat(idade);

if (idade > 18) {
  console.log("Adulto");
} else if (idade > 12) {
  console.log("Adolescente");
} else {
  console.log("Criança");
}

const resultado = idade == 18 ? "Maioridade" : "Minoridade";
console.log(resultado);
