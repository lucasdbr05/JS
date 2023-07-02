function instruction(code) {
  const charCount = {};
  let codeNew = code.toLowerCase();
  for (let i = 0; i < code.length; i++) {
    charCount[code[i]] = charCount[code[i]] ? charCount[code[i]] + 1 : 1;
  }
  return Object.values(charCount).every((count, index, array) =>
    index !== 0 ? count === array[index - 1] : true
  );
}

console.log(instruction("LLuuccaass"));
///////////
function compareCounts(count, index, array) {
  return index !== 0 ? count === array[index - 1] : true;
}
function checkBalance(code) {
  const charCount = {};
  let codeNew = code.toLowerCase();
  for (let i = 0; i < code.length; i++) {
    const currentLetter = code[i];
    charCount[currentLetter] = charCount[currentLetter]
      ? charCount[currentLetter] + 1
      : 1;
  }
  return Object.values(charCount).every(compareCounts);
}

console.log(checkBalance("LLuuccaass"));
