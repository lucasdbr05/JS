function coordinates(x, y) {
  const mainArray = [];
  for (let a = 0; a <= x; a++) {
    for (let b = 0; b <= y; b++) {
      mainArray.push([a, b]);
    }
  }
  return mainArray;
}

console.log(coordinates(9, 9));
