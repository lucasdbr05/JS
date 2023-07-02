//Função capaz de receber outras funções como parametros

function calcular(a, b, operacao) {
  console.log("Realizando uma operação");
  const resultado = operacao(a, b);
  return resultado;
}

function soma(a, b) {
  return a + b;
}

console.log(calcular(5, 6, soma));

console.log(
  calcular(5, 6, function subtrai(a, b) {
    return a - b;
  })
);

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maçã", "Banana", "Pêra", "Melancia"];

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[0], i, lista);
}

lista.forEach(exibirElemento);

lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});
