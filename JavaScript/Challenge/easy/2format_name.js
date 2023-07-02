function formatName(name) {
  let arrName = name.split(" ");
  let abbreviated = "";
  for (let i = 1; i < arrName.length - 1; i++) {
    abbreviated += arrName[i][0] + ". ";
  }
  return `${arrName[arrName.length - 1].toUpperCase()}, ${
    arrName[0]
  }. ${abbreviated}`;
}
console.log(formatName("Lucas Gabriel de Oliveira Lima"));
