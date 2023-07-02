function invertWord(text) {
  return text.split("").reverse().join("");
}
function reversedWord(str) {
  return str.toLowerCase().split(" ").map(invertWord).join(" ");
}

console.log(reversedWord("Lucas Gabriel"));
/////

function invert(str) {
  const wordsArray = str.toLowerCase().split(" ");
  const inverse = wordsArray.map((word) => {
    return word.split("").reverse().join("");
  });
  return inverse.join(" ");
}
console.log(invert("Lucas Gabriel"));
