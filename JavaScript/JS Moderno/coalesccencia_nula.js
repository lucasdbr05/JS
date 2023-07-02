//Checa entre diferente valores e retorna o primeiro diferente de null ou undeefined

const a = 0;
const b = null;
const c = "Teste";

console.log(a || b || c);
console.log(b ?? a);
console.log(b ?? c);
//

let a1 = 0;
let b1 = a1 || 42;
console.log({ a1, b1 });

b1 = a1 ?? 42;
console.log({ a1, b1 });
