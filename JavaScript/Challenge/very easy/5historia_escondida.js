function biggestLetter(text) {
  const str = text.toLowerCase();
  const lettersArray = str.split("");
  const sortedArray = lettersArray.sort();
  return sortedArray[sortedArray.length - 1];
}

console.log(biggestLetter("Bom dia, o sol ja nasceu la na fazendinha"));

/////
function biggestLetter(text) {
  const str = text.toLowerCase().split("").sort();
  return str[str.length - 1];
}

console.log(biggestLetter("Lucas Gabriel de Oliveira Lima"));
