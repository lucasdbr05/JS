const databaseUsers = ["erick_14", "pam_1s2", "VICTOR_99A"];

function userValidation(username) {
  if (username.length < 4 || username.length > 32) {
    console.log("Fora do tamanho permitido");
    return false;
  }
  //use regular expressions
  // if string has only number, letter and _
  if (username.match(/\W/)) {
    console.log("Caracteres invalidos");
    return false;
  }

  // if string begins different of a number
  if (username.match(/^[0-9]|^_/)) {
    console.log("Primeiro caractere invalido");
    return false;
  }
  // if string ends whit _
  if (username.match(/^_$/)) {
    console.log("Ultimo caractere invalido");
    return false;
  }

  // if string has at least one number, une letter and one underline
  if (
    !(
      username.match(/[A-Za-z]/) &&
      username.match(/[0-9]/) &&
      username.match(/_/)
    )
  ) {
    console.log("Ausencia de algum tipo de caractere requisitado");
    return false;
  }

  const alreadyExists = databaseUsers.indexOf(username) !== -1;
  if (alreadyExists) {
    console.log("Username ja existente");
    return false;
  }

  databaseUsers.push(username);
  return true;
}

console.log(userValidation("52alfred"));
console.log(userValidation("erick_14"));
console.log(userValidation("josh_g15"));
console.log(userValidation("hugo123"));
console.log(userValidation("k_9"));
console.log(databaseUsers);
