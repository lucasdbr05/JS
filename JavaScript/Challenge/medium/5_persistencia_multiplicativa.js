function timesPersistence(number) {
  let arrNumber = parseArrInt(number);
  let pmCounter = 0;
  while (arrNumber.length > 1) {
    const newNum = arrNumber.reduce((accum, nums) => {
      return (accum *= nums);
    }, 1);
    pmCounter++;
    arrNumber = parseArrInt(newNum);
  }
  return pmCounter;
}
function parseArrInt(number) {
  const arr = String(number).split("");
  let intArr = [];
  for (let i = 0; i < arr.length; i++) {
    intArr[i] = parseInt(arr[i]);
  }
  return intArr;
}

console.log(timesPersistence(539));
console.log(timesPersistence(999));
console.log(timesPersistence(7));
console.log(timesPersistence(7169));
/////
function multiplicativePersistence(num) {
  if (num < 10) {
    return 0;
  }

  const digits = num.toString().split("");
  const product = digits.reduce((accum, nums) => accum * nums, 1);

  return 1 + multiplicativePersistence(product);
}

console.log(multiplicativePersistence(539));
console.log(multiplicativePersistence(999));
console.log(multiplicativePersistence(7));
console.log(multiplicativePersistence(7169));
