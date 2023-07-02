let opcao = prompt(
  "Escolha sua opção:\n-1: Opção 1\n-2: Opção 2\n-3: Opção 3\n-4: Opção 4\n-5: Encerrar"
);

while (opcao != 5) {
  switch (opcao) {
    case "1":
      alert("Primeira opção");
      opcao = prompt(
        "Escolha sua opção:\n-1: Opção 1\n-2: Opção 2\n-3: Opção 3\n-4: Opção 4\n-5: Encerrar"
      );
      break;
    case "2":
      alert("Segunda opção");
      opcao = prompt(
        "Escolha sua opção:\n-1: Opção 1\n-2: Opção 2\n-3: Opção 3\n-4: Opção 4\n-5: Encerrar"
      );
      break;
    case "3":
      alert("Terceira opção");
      opcao = prompt(
        "Escolha sua opção:\n-1: Opção 1\n-2: Opção 2\n-3: Opção 3\n-4: Opção 4\n-5: Encerrar"
      );
      break;
    case "4":
      alert("Quarta opção");
      opcao = prompt(
        "Escolha sua opção:\n-1: Opção 1\n-2: Opção 2\n-3: Opção 3\n-4: Opção 4\n-5: Encerrar"
      );
      break;
    default:
      alert("Opção não conhecida.");
      opcao = prompt(
        "Escolha sua opção:\n-1: Opção 1\n-2: Opção 2\n-3: Opção 3\n-4: Opção 4\n-5: Encerrar"
      );
      break;
  }
}
alert("Execução Encerrada");

/*
let opcao = 5

do {

   opcao = prompt(
    "Escolha sua opção:\n-1: Opção 1\n-2: Opção 2\n-3: Opção 3\n-4: Opção 4\n-5: Encerrar"
  );


  switch (opcao) {
    case "1":
      alert("Primeira opção");
      );
      break;
    case "2":
      alert("Segunda opção");
      break;
    case "3":
      alert("Terceira opção");
      break;
    case "4":
      alert("Quarta opção");
      break;
    case "5":
      alert("Você escolheu sair");
      break;
    default:
      alert("Opção não conhecida.");
      opcao = prompt(
        "Escolha sua opção:\n-1: Opção 1\n-2: Opção 2\n-3: Opção 3\n-4: Opção 4\n-5: Encerrar"
      );
      break;
  }
}(while opcao!=5)

*/
