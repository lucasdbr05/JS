const turista = prompt("Digite o nome do turista: ");
let cidades = "";
let quantidade = 0;
let resposta = prompt("Já visitou alguma cidade:(Sim/Não) ");

while (resposta === "Sim") {
  let qual = prompt("Qual é o nome da cidade?");
  quantidade += 1;
  cidades += "-" + qual + "\n";
  resposta = prompt("Já visitou alguma cidade:(Sim/Não) ");
}
alert(turista + " já visitou " + quantidade + " cidades; como:\n " + cidades);

/*
const turista = prompt("Digite o nome do turista: ");
let cidades = "";
let quantidade = 0;
let resposta = prompt("Já visitou alguma cidade:(Sim/Não) ");

while (resposta === "Sim") {
  let qual = prompt("Qual é o nome da cidade?");
  quantidade += 1;
  cidades += "-" + qual + "\n";
  resposta = prompt("Já visitou alguma cidade:(Sim/Não) ");

  if (resposta === "Não") {
    alert(
      turista + " já visitou " + quantidade + " cidades; como:\n " + cidades
    );
    break;
  }
}

*/
