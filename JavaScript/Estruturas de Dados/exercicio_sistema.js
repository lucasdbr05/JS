function mostrar_menu() {
  return prompt(
    "Olá! Seja bem-vendo ao sistema de vagas.\nEscolha a oção correspondente ao que você deseja:\n->1: Listar vagas disponíveis\n->2: Criar uma nova vaga\n->3: Visualizar uma vaga\n->4: Inscrever um candidato em uma vaga\n->5: Excluir uma vaga\n->0: Sair"
  );
}

function cria_vaga() {
  let vaga = {};
  vaga.nome = prompt("Escreva o nome da vaga: ");
  vaga.descricao = prompt("Descreva os detalhes da vaga: ");
  vaga.data_limite = prompt("Digite uma data limite: ");
  vaga.candidatos = [];

  const confirmacao = confirm(
    "Deseja mesmo salvar esta vaga?\nVaga: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nLimite de inscrição: " +
      vaga.data_limite
  );
  if (confirmacao) {
    vagas.push(vaga);
  }
}

function visualizar_vaga() {
  let indice = parseFloat(prompt("Digite o índice da vaga desejada: "));

  if (indice >= vagas.length || indice < 0) {
    alert("ÍNDICE INVÁLIDO");
    return;
  }
  let vaga = vagas[indice];
  let candidatos_em_texto = vaga.candidatos.reduce(function (
    texto_final,
    candidato
  ) {
    return texto_final + "\n -" + candidato;
  },
  "");
  alert(
    "Vaga nº: " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nNº de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos: " +
      candidatos_em_texto
  );
}

function excluir_vaga() {
  let index = parseFloat(
    prompt("Digite o índice da vaga que deseja excluir: ")
  );
  if (index < vagas.length) {
    const confirmacao = confirm(
      "Deseja mesmo excluir esta vaga?\nVaga: " +
        vagas[index].nome +
        "\nDescrição: " +
        vagas[index].descricao +
        "\nLimite de inscrição: " +
        vagas[index].data_limite
    );
    if (confirmacao) {
      vagas.splice(index, 1);
    }
  } else {
    alert("ÍNDICE NÃO ENCONTRADO.");
  }
}

function inscrever_candidato() {
  let candidato = {};
  candidato.nome = prompt("Digite o nome do candidato: ");
  let indice_vaga = prompt("Digite o indice da vaga escolhida: ");
  if (indice_vaga < vagas.length) {
    vagas.filter(function (vaga) {
      return vaga.indice == indice_vaga;
    });
  } else {
    alert("ÍNDICE NÃO ENCONTRADO.");
  }

  const confirmacao = confirm(
    "Deseja mesmo se inscrever nesta vaga?\nVaga: " +
      vagas[indice_vaga].nome +
      "\nDescrição: " +
      vagas[indice_vaga].descricao +
      "\nLimite de inscrição: " +
      vagas[indice_vaga].data_limite
  );
  if (confirmacao) {
    vagas[indice_vaga].candidatos.push(candidato);
    alert("INSCRIÇÃO REALIZADA");
  }
}

function listar_vagas() {
  let vagas_em_texto = vagas.reduce(function (textofinal, vaga, indice) {
    textofinal += indice + ". ";
    textofinal += vaga.nome;
    textofinal += " (" + vaga.candidatos.length + ")\n";
    return textofinal;
  }, "");
  alert(vagas_em_texto);
}

let vagas = [];

let candidatos = [];
let menu = "";
do {
  menu = mostrar_menu();
  menu = parseFloat(menu);

  switch (menu) {
    case 1:
      listar_vagas();
      break;
    case 2:
      cria_vaga();
      break;
    case 3:
      visualizar_vaga();
      break;
    case 4:
      inscrever_candidato();
      break;
    case 5:
      excluir_vaga();
      break;
    case 0:
      alert("Obrigado pela colaboração");
    default:
      alert("ÍNDICE NÃO ENCONTRADO");
      break;
  }
} while (menu != 0);
alert("Encerrando sistema.");
