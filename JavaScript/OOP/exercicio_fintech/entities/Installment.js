module.exports = class Installment {
  constructor(instalmentValue, number) {
    this.instalmentValue = instalmentValue;
    this.number = number;
    this.isPayed = "pending";
  }
};
