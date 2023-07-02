let imoveis = [];

let menu = "";

do {
  menu = prompt(
    "Quantidade de Imóveis: " +
      imoveis.length +
      "\n->1: Cadastrar novo imóvel.\n->2: Listar Imóveis\n->3: Sair"
  );
  menu = parseFloat(menu);

  switch (menu) {
    case 1:
      let casa = {};

      casa.proprietario = prompt("Digite o nome do proprietário: ");
      casa.quartos = prompt("Digite a quantidade de quartos: ");
      casa.banheiros = prompt("Digite a quantidade de banheiros: ");
      casa.garagem = prompt("O imóvel possui garagem?(sim/não) ");

      const confirma = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          casa.proprietario +
          "\nQuartos: " +
          casa.quartos +
          "\nBanheiros: " +
          casa.banheiros +
          "\nPossui Garagem? " +
          casa.garagem
      );

      if (confirma) {
        imoveis.push(casa);
      }
      break;

    case 2:
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case 3:
      alert("SAINDO.");
    default:
      alert("Opção sem correspondência");
      break;
  }
} while (menu != 3);
