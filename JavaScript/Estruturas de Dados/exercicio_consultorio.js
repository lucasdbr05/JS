let lista_pacientes = [];
let menu = "";

do {
  let texto = "";
  for (let i = 0; i < lista_pacientes.length; i++) {
    texto += "-" + (i + 1) + "º: " + lista_pacientes[i] + "\n";
  }
  menu = prompt(
    "Olá, seja bem-vindo.\nDigite o número correspondente à sua escolha:\n->1:Novo paciente\n->2:Consultar paciente\n->3:Sair\n" +
      texto
  );
  menu = parseFloat(menu);

  switch (menu) {
    case 1:
      let novo_paciente = prompt(
        "Digite o nome do novo paciente a ser adicionado:"
      );
      lista_pacientes.push(novo_paciente);
      break;
    case 2:
      if (typeof lista_pacientes[0] === "string") {
        alert("Paciente " + lista_pacientes[0] + " atendido.");
        lista_pacientes.shift();
      } else {
        alert("Sem pacientes na fila.");
      }
      break;
    default:
      prompt("Valor desconhecido.");

      break;
  }
} while (menu != 3);
alert("Fechando o sistema.");
