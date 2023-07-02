class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

class Apartment extends Property {
  constructor(area, price, number) {
    super(area, price);
    this.number = number;
  }
  getFloor() {
    return this.number.slice(0, -2);
  }
}

const apt = new Apartment(100, 160000, "312");

const land = new Property(200, 50000);
const someHouse = new House(120, 200000);

console.log(land);
console.log(someHouse);
console.log(someHouse.getPricePerSquareMeter());
console.log(someHouse instanceof Property);
console.log(apt);
console.log(apt.getFloor());
console.log(apt.getPricePerSquareMeter());
