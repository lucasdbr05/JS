function fibonacci(number) {
  let num = BigInt(number);
  let i = 0;
  let a = BigInt(0);
  let b = BigInt(1);
  let aux = BigInt(0);

  while (i < number) {
    aux = a;
    a = a + b;
    b = aux;
    i++;
  }
  return a;
}

console.log(fibonacci(0));
console.log(fibonacci(7));
console.log(fibonacci(144n));
console.log(fibonacci(100));
console.log(fibonacci(500n));

////
console.log("     ");
//////

let fibonacciCache = {};
function fibonacciSequence(num) {
  const big = BigInt(num);

  if (typeof fibonacciCache[big] === "bigint") {
    return fibonacciCache[big];
  }

  let result = 0n;

  if (big === 1n) {
    result = 1n;
  } else if (big >= 2n) {
    result = fibonacciSequence(big - 1n) + fibonacciSequence(big - 2n);
  }

  fibonacciCache[big] = result;

  return result;
}

console.log(fibonacciSequence(8000n));
