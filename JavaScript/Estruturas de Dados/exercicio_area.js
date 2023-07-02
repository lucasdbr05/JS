function retangulo(h, b) {
  return h * b;
}

function square(lado) {
  return lado ** 2;
}

function triangulo(h, b) {
  return (h * b) / 2;
}

function trapezio(B, b, h) {
  return ((b + B) * h) / 2;
}

function circulo(raio) {
  return raio ** 2 * 3.1415;
}

let menu = "";
let um = "";

do {
  menu = prompt(
    "Bem vindo à calculadora de áreas. Escolha a opção que deseja:\n->1: Quadrado\n->2: Retângulo\n->3: Triângulo\n->4: Trapézio\n->5: Círculo\n->0: Sair"
  );
  menu = parseFloat(menu);
  um = prompt("Digite uma unidade de medida: ");

  switch (menu) {
    case 1:
      let lado = prompt("Qual é o lado do quadrado?");
      alert("ÁREA = " + square(lado) + um + "^2");
      break;
    case 2:
      let base = prompt("Qual é a base do retangulo?");
      let height = prompt("Qual é a altura do retangulo?");
      alert("ÁREA = " + retangulo(base, height) + um + "^2");
      break;
    case 3:
      let baset = prompt("Qual é a base do triangulo?");
      let heightt = prompt("Qual é a altura do triangulo?");
      alert("ÁREA = " + triangulo(baset, heightt) + um + "^2");
      break;
    case 4:
      let basema = parseFloat(prompt("Qual é a base maior do trapézio?"));
      let baseme = parseFloat(prompt("Qual é a base menor do trapézio?"));
      let altura = prompt("Qual é a altura do trapézio?");
      alert("ÁREA = " + trapezio(basema, baseme, altura) + um + "^2");
      break;
    case 5:
      let radio = prompt("Qual é o raio do circulo?");
      alert("ÁREA = " + circulo(radio) + um + "^2");
      break;
    case 0:
      alert("Encerrando sistema");
  }
} while (menu != 0);
