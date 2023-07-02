function square(num) {
  let str = num.toString();
  code = "";
  for (let i = 0; i < str.length; i++) {
    code += Number(str[i]) ** 2;
  }
  return Number(code);
}

console.log(square(25));
//////
function square(num) {
  let digits = num.toString().split("");
  const squared = digits.map((digit) => Number(digit) ** 2).join("");
  return squared;
}

console.log(square(473));
