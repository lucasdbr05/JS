const Installment = require("./Installment");

module.exports = class Loan {
  static #interestRate = 1.0;
  constructor(loanValue, installments) {
    this.loanValue = loanValue;
    this.installments = [];
    for (let i = 1; i <= installments; i++) {
      this.installments.push(
        new Installment((loanValue * Loan.#interestRate) / installments, i)
      );
    }
    this.creationDate = new Date();
  }

  static get interestRate() {
    return Loan.#interestRate;
  }
  static set interestRate(newPercentRate) {
    Loan.#interestRate = (100 + newPercentRate) / 100;
  }
};
