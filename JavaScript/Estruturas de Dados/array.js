/*const lista = [];

lista[0] = "Lucas";
lista[1] = 17;

alert(lista);*/

const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

//Adicionar
arr.push("Lorma");
arr.push("Lorma");
console.log(arr);

arr.unshift("Lorma");
console.log(arr);

//Retirar
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

//Pesquisar
const inclui = arr.includes("Gandalf");
console.log(inclui);

const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar
const lista = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(lista);
console.log(outros);

//Concatenar
const sociedade = lista.concat(outros, "Lorma");
console.log(sociedade);

//Substituição
const a = sociedade.splice(indice, 1, "Paysandu");
console.log(sociedade);

//Iterar em Array

for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i];
  console.log(elemento + " se encontra em " + i);
}
