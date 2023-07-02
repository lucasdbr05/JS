function jailVerifier(arr) {
  let newArr = arr.map((value) => parseInt(value));
  let missingPrisoners = [];
  newArr.sort((a, b) => a - b);
  console.log(newArr);
  for (let i = 1; i < newArr[newArr.length - 1]; i++) {
    if (!newArr.includes(i)) {
      missingPrisoners.push(i.toString().padStart(4, "0"));
    }
  }
  return missingPrisoners;
}

console.log(jailVerifier(["0004", "0002", "0005", "0003", "0009", "0020"]));
