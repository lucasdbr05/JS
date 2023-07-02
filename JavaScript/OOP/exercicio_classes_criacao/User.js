class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (this.email == email && this.password == password) {
      console.log("Login realizado com sucesso!");
    } else {
      console.log("Falha no login.");
    }
  }
}
const user1 = new User(
  "Lucas Gabriel de Oliveira Lima",
  "lucas@gmail.com",
  "FLU"
);
user1.login("lucas@gmail.com", "FLU");
