function NormalSum(a, b) {
  return a + b;
}
console.log(`Soma normal: ${NormalSum(10, 5)}`);

const anonimousSum = function (a, b) {
  return a + b;
};
console.log(`Soma normal: ${anonimousSum(19, 16)}`);
//Arrow Function
const arrowSum = (a, b) => a + b;
console.log(`Soma normal: ${arrowSum(20, 35)}`);

const double = (n) => `O dobro  de ${n} = ${n * 2}`;
console.log(double(20));

let cidades = ["New York", "Kansas City", "Colorado", "Florida"];
const startWithK = cidades.filter((city) => city[0] == "K");
console.log(startWithK);
