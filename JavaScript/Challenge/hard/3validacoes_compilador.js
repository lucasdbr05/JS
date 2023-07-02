function bracketsChecker(text) {
  const bracketsPSC = { "(": ")", "[": "]", "{": "}" };
  let stack = [];
  let arrText = text.split("");

  arrText.forEach((letter) => {
    if (Object.keys(bracketsPSC).includes(letter[0])) {
      stack.push(letter[0]);
    }

    if (bracketsPSC[stack[stack.length - 1]] == letter[0]) {
      stack.pop();
    }
  });

  return stack.length == 0;
}

console.log(bracketsChecker("[]"));
console.log(bracketsChecker("[{()()()[]}]"));
console.log(bracketsChecker("[{]}"));
console.log(bracketsChecker("[((((((((())))))))]"));
console.log(bracketsChecker("[((((((((((()))))))))))]"));
/////

function bracketCheck(str) {
  let brackets = str.match(/\(|\)|\[|\]|\{|\}/g).join("");

  while (brackets.match(/\(\)|\[\]|\{\}/)) {
    brackets = brackets.replace(/\(\)|\[\]|\{\}/, "");
    console.log(brackets);
  }

  return brackets.length === -0;
}
console.log(bracketCheck("[]"));
console.log(bracketCheck("[{()()()[]}]"));
console.log(bracketCheck("[{]}"));
console.log(bracketCheck("[((((((((())))))))]"));
console.log(bracketCheck("[((((((((((()))))))))))]"));
