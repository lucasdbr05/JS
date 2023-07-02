const App = require("./App");

App.createUser("isaac@email.com", "Isaac Pontes");
App.createUser("lucas@email.com", "Lucas Lima");
App.createUser("juliana@email.com", "Juliana Conde");

App.deposit("isaac@email.com", 100);

App.transfer("isaac@email.com", "lucas@email.com", 20);

App.interestRateChanger(10);
App.takeLoan("juliana@email.com", 2000, 24);

console.log(App.findUser("isaac@email.com"));
console.log(App.findUser("isaac@email.com").account);
console.log(App.findUser("lucas@email.com"));
console.log(App.findUser("lucas@email.com").account);
console.log(App.findUser("juliana@email.com"));
console.log(App.findUser("juliana@email.com").account);
console.log(App.findUser("juliana@email.com").account.loans[0].installments);
