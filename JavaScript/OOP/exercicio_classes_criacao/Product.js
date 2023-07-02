class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addOnStock(quantity) {
    this.inStock += quantity;
  }
  calculateDiscount(rate) {
    console.log(`Price with discount: ${this.price * ((100 - rate) / 100)}`);
    return this.price * ((100 - rate) / 100);
  }
}

const ijgtshirt = new Product(
  "IJG t-shirt",
  "20 years of the biggest from capital",
  "20"
);
ijgtshirt.addOnStock(100);
console.log(ijgtshirt);
ijgtshirt.calculateDiscount(20);
