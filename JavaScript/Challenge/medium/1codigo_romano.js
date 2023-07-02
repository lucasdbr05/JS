function romanCode(romanNum) {
  const arrLetter = romanNum.toUpperCase().split("");

  codedRoman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const codedArr = arrLetter.map((numeral) => codedRoman[numeral]);

  return codedArr.reduceRight((accum, current, index, array) => {
    3;

    // reduce initializing from right side
    return current < array[index + 1] ? accum - current : accum + current;
    /*if (current < array[index + 1]) {
      return accum - current;
    } else {
      return accum + current;
    }*/
  }, 0);
}

console.log(romanCode("CMXCIX"));
console.log(romanCode("XLVIIII"));
console.log(romanCode("CMIX"));
console.log(romanCode("CDXXXVIII"));
console.log(romanCode("MMMCMXCIX"));
