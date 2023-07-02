class Book {
  constructor(title, pages, tags, author) {
    this.title = title;
    this.pages = pages;
    this.tags = tags;
    this.author = author;
    this.published = false;
    this.inStock = 0;
  }
  publish() {
    this.published = true;
  }
  addOnStock(quantity) {
    this.inStock += quantity;
  }
}

const author = { name: "Christopher Paolini" };
const tags = ["fantasy", "adventure", "medieval"];

const eragon = new Book("Eragon", 468, tags, author);
eragon.publish();
eragon.addOnStock(50);
console.log(eragon);
