let quant_inicial = prompt("Digite seu saldo bancário inicial: ");
quant_inicial = parseFloat(quant_inicial);

let opcoes = "";

do {
  opcoes = prompt(
    "Quantidade Inicial: R$" +
      quant_inicial +
      "\nOpções:\n" +
      "-1: Depositar dinheiro\n-2: Retirar dinheiro\n-3: SAIR"
  );
  opcoes = parseFloat(opcoes);
  switch (opcoes) {
    case 1:
      let depositar = prompt("Deposite o valor:");
      depositar = parseFloat(depositar);
      quant_inicial += depositar;
      break;
    case 2:
      let retirar = prompt("Retire o valor:");
      retirar = parseFloat(retirar);
      quant_inicial -= retirar;
      break;
    case 3:
      alert("Saindo...");
      break;
  }
} while (opcoes != 3);
alert("Execução Encerrada");

/*
let quant_inicial = prompt("Digite seu saldo bancário inicial: ");
quant_inicial = parseFloat(quant_inicial);

let opcoes = prompt(
  "Quantidade Inicial: R$" +
    quant_inicial +
    "\nOpções:\n" +
    "-1: Depositar dinheiro\n-2: Retirar dinheiro\n-3: SAIR"
);
opcoes = parseFloat(opcoes);
do {
  switch (opcoes) {
    case 1:
      let depositar = prompt("Deposite o valor:");
      depositar = parseFloat(depositar);
      quant_inicial += depositar;
      opcoes = prompt(
        "Quantidade Inicial: R$" +
          quant_inicial +
          "\nOpções:\n" +
          "-1: Depositar dinheiro\n-2: Retirar dinheiro\n-3: SAIR"
      );
    case 2:
      let retirar = prompt("Retire o valor:");
      retirar = parseFloat(retirar);
      quant_inicial -= retirar;
      opcoes = prompt(
        "Quantidade Inicial: R$" +
          quant_inicial +
          "\nOpções:\n" +
          "-1: Depositar dinheiro\n-2: Retirar dinheiro\n-3: SAIR"
      );
  }
} while (opcoes != 3);
alert("Execução Encerrada");
*/
