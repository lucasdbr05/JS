function calculate(code) {
  const step1 = code.reduce(
    (accum, current, index) => (index % 2 === 0 ? accum + current : accum),
    0
  );
  const step2 = code.reduce(
    (accum, current, index) => (index % 2 === 1 ? accum + current : accum),
    0
  );
  let step3 = step1 * 3 + step2;
  return step3 % 10 !== 0 ? 10 - (step3 % 10) : 0;
}

function identifierCode(num) {
  const numArray = num.toString().split("").map(Number);
  const idArray = numArray.slice(0, -1);

  const expectedDigit = calculate(idArray);

  return expectedDigit === numArray[numArray.length - 1];
}
console.log(identifierCode(547020743789));
console.log(identifierCode(301354030348));
console.log(identifierCode(301354030349));
