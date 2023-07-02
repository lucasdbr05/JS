let palavra = prompt("Digite a palavra para saber se é palindromo: ");
let check = "";
len = palavra.length;
len = parseFloat(len);
for (let i = len - 1; i >= 0; i--) {
  check += palavra[i];
}

if (check == palavra) {
  alert("Palindromo!");
} else {
  alert("Não Palindromo...\n " + palavra + "!=" + check);
}
