function cesarCifar(string, num) {
  let strArr = string.split("");
  const key = num % 26;

  const codesArray = strArr.map((char) => {
    const currentCode = char.charCodeAt(0);

    if (currentCode - key < 65 && currentCode >= 65 && currentCode <= 90) {
      return currentCode + 26;
    }
    if (currentCode - key < 97 && currentCode >= 97 && currentCode <= 122) {
      return currentCode + 26;
    }
    return currentCode;
  });
  return codesArray.map((code) => String.fromCharCode(code - key)).join("");
}

console.log(cesarCifar("Vguvg", 2));
console.log(cesarCifar("Amozmlw", 8));
console.log(cesarCifar("Qaiik", 60));

function cesarCoder(string, num) {
  let strArr = string.split("");
  const key = num % 26;

  const codesArray = strArr.map((char) => {
    const currentCode = char.charCodeAt(0);

    if (currentCode + key > 90 && currentCode >= 65 && currentCode <= 90) {
      return currentCode - 26;
    }
    if (currentCode + key > 122 && currentCode >= 97 && currentCode <= 122) {
      return currentCode - 26;
    }
    return currentCode;
  });
  return codesArray.map((code) => String.fromCharCode(code + key)).join("");
}

console.log(cesarCoder("Teste", 2));
console.log(cesarCoder("Lucas", 10));
