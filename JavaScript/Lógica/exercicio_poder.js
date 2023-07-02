let nomeP = prompt("DIGITE O NOME DO PRIMEIRO PERSONAGEM: ");
let ataque = prompt("DIGITE SEU  PODER DE ATAQUE: ");
let nomeS = prompt("DIGITE O NOME DO SEGUNDO PERSONAGEM: ");
let pontos = prompt("DIGITE SEU PODER DE VIDA DO PERSONAGEM");
let defesa = prompt("DIGITE SEU PODER DE DEFESA: ");
let escudo = prompt("PERSONAGEM POSSUI ESCUDO?(Sim/Não)");
let dano = 0;

ataque = parseFloat(ataque);
pontos = parseFloat(pontos);
defesa = parseFloat(defesa);

if (ataque > defesa && escudo === "Sim") {
  dano = ataque - defesa;
} else if (ataque > defesa && escudo === "Não") {
  dano = (ataque - defesa) / 2;
} else {
  dano = 0;
}

pontos -= dano;

text =
  "Pontos de vida " +
  nomeS +
  ": " +
  pontos +
  "\nQuantidade de dano: " +
  dano +
  "\n _________________" +
  "\n" +
  nomeP +
  "\nAtaque: " +
  ataque;

console.log(text);
alert(nomeP + " causou " + dano + " de dano em " + nomeS);
window.alert(text);
