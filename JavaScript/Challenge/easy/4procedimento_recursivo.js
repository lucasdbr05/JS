function fatorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log(fatorial(10));
////
function fatorialBI(num) {
  const bigNum = BigInt(num);
  if (bigNum === 0n) {
    return 1n;
  } else {
    return bigNum * fatorialBI(bigNum - 1n);
  }
}
console.log(fatorialBI(35));
console.log(fatorialBI(20));
