function appendStr(phrase, str, index) {
  const phraseArr = phrase.split("");
  for (let iP = 0; iP <= phraseArr.length; iP++) {
    for (let i = 0; i < index.length; i++) {
      if (iP == index[i]) {
        phraseArr[iP] = str + phraseArr[iP];
      }
    }
  }
  return phraseArr.join("");
}

console.log(appendStr("capaz utilizar as capsulas emergencia", "de ", [6, 27]));
console.log(appendStr("Hello", "World ", [6]));
console.log(appendStr("Isso e um teste", "nao", []));

//////
function insertToString(str, toInsert, indexes) {
  const charsArr = str.split("");
  let insertCount = 0;

  for (let i = 0; i <= str.length; i++) {
    if (indexes.includes(i)) {
      charsArr.splice(i + insertCount, 0, toInsert);
      insertCount++;
    }
  }
  return charsArr.join("");
}

console.log(
  insertToString("capaz utilizar as capsulas emergencia", "de ", [6, 27])
);
console.log(insertToString("Hello", "World ", [6]));
console.log(insertToString("Isso e um teste", "nao", []));
