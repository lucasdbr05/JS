function ola() {
  console.log("Olá, mundo!");
}
ola();

function dobro(x = 0) {
  alert("O DOBRO DE " + x + " É " + x * 2);
}
dobro(5);

function sayHello(name = "mundo") {
  alert("Olá, " + name + "!");
}
sayHello("Lucas");

function soma(a = 0, b = 0) {
  alert("Resultado da soma é: " + (a + b));
}
soma(5, 15);

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = { nome, email, senha, tipo };
  console.log(usuario);
}

function novoUsuario(nome, tipo = "leitor", email, senha) {
  const usuario = { nome: nome, email: email, senha: senha, tipo: tipo };
  console.log(usuario);
}

criarUsuario("Lucas", "lucas@email.com", "1234");
novoUsuario("Lucas", "admin", "lucas@email.com", "1234");

/*
// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}
function parametrosDoJeitoCerto(usuario) {
  // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)
*/
