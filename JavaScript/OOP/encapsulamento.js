class Account {
  #password;
  #balance;

  constructor(user) {
    //para funcionar, deve se passar dentro de um objeto user chaves com valores correspondentes ao que se deseja
    this.email = user.email;
    this.#password = user.password;
    this.#balance = 0;
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }
}

const user = {
  email: "user@email.com",
  password: "123456",
};

const userAccount = new Account(user);

console.log(userAccount);
//console.log(userAccount.#password) // Gera erro
//console.log(userAccount.#balance) // Gera erro
//console.log(userAccount.#authenticate()) // Gera erro
console.log(userAccount.getBalance("user@email.com", "123456"));
console.log(userAccount.getBalance("user@email.com", "000000"));
