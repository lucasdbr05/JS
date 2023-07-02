lista_cartas = [];
let texto = "";

let menu = "";

do {
  for (let i = lista_cartas.length - 1; i > 0; i--) {
    texto += lista_cartas[i] + "\n";
  }

  menu = prompt(
    "Cartas no Baralho: " +
      lista_cartas.length +
      "\n" +
      "Olá, seja bem-vindo.\nDigite o número correspondente à sua escolha:\n->1:Adicionar carta\n->2:Puxar carta\n->3:Sair\n" +
      texto
  );
  menu = parseFloat(menu);

  switch (menu) {
    case 1:
      let nova_carta = prompt("Digite o nome da nova carta a ser adicionado:");
      lista_cartas.unshift(nova_carta);

      break;
    case 2:
      if (lista_cartas.length > 0) {
        alert("Carta " + lista_cartas[0] + " retirada.");
        lista_cartas.shift();
      } else {
        alert("Baralho vazio");
      }
      break;

    default:
      alert("Valor desconhecido.");
      break;
  }
} while (menu != 3);
alert("Fechando o sistema.");
