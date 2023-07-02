//SPREAD
let name = "Lucas Gabriel de Oliveira Lima";

console.log(...name);

//Arrays's clones
let numbers = [4, 8, 12, 16, 20];

let numbersCopy = numbers;
numbersCopy.push(24);
numbersCopy.push(28);

let numbersClone = [...numbers];
numbersClone.push(32);

console.log({ numbers, numbersClone, numbersCopy });

let numbersObj = { ...numbers };
let numbersObjClone = { ...numbersObj };

numbersObjClone.test = "Test";
console.log({ numbersObj, numbersObjClone });

//REST PARAMS
function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}
console.log(sum(72, 56, 91, 101));
