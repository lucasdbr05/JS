const Address = require("./Address");
const Person = require("./Person");

const addr = new Address(
  "SQ. 15, QUADR 03",
  52,
  "Centro",
  "Cidade Ocidental",
  "GO"
);
const lucas = new Person("John Doe", addr.fullAddress());

console.log(lucas);
