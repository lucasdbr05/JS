let pessoa = {
  nome: "Lucas",
  idade: 17,
  ola_mundo() {
    console.log("Olá, mundo! Meu nome é " + this.nome);
  },
};

console.log(pessoa);
pessoa.ola_mundo();
