function crackPassword(digits) {
  if (digits.length == 0) {
    return [[]];
  }

  const removedChar = digits[0];
  const partialChar = digits.slice(1);

  const partialPossibilities = crackPassword(partialChar);

  const allPossibilities = [];

  partialPossibilities.forEach((partialPossibility) => {
    for (let i = 0; i <= partialPossibility.length; i++) {
      const completePossibility = [
        ...partialPossibility.slice(0, i),
        removedChar,
        ...partialPossibility.slice(i),
      ];
      allPossibilities.push(completePossibility);
    }
  });
  return allPossibilities;
}

console.log(crackPassword(["X", "s", "-", "#"]));
console.log(crackPassword(["1", "2", "3"]));
console.log(crackPassword([]));
console.log(crackPassword(["a", "7", "c", "4", "0"]));
