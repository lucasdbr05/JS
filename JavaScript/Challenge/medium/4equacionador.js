class Equantion {
  constructor(a = 0, b = 0, c = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getRoots() {
    if (this.a == 0 && this.b == 0 && this.c == 0) {
      return "Erro! Nenhum parametro informado.";
    }

    if (this.a == 0 && this.b == 0) {
      console.log("Parametros insuficientes");
      console.log("Nenhuma raiz real");
      return [];
    }

    if (this.a === 0) {
      console.log(`${this.b}x + (${this.c}) = 0`);
      console.log(`${this.b}x = ${-this.c}`);
      console.log(`x = ${-this.c}/${this.b}`);
      console.log(`x = ${-this.c / this.b}`);
      return [-this.c / this.b];
    }

    const delta = this.b ** 2 + 4 * this.a * this.c;
    console.log(`${this.a}x² + (${this.b}x) + (${this.c}) = 0`);
    console.log(`Δ = (${this.b})² - 4*(${this.a})*(${this.c})`);
    console.log(`Δ = ${this.b ** 2 + 4 * this.a * this.c}`);

    if (delta < 0) {
      console.log("Nenhuma raiz real");
      return [];
    }

    console.log(
      `x' =  -(${this.b} + √ ${this.b ** 2 + 4 * this.a * this.c})/2*${this.a}`
    );
    console.log(
      `x'' =  -(${this.b} - √ ${this.b ** 2 + 4 * this.a * this.c})/2*${this.a}`
    );
    console.log(
      `x' = (${-this.b} + √ ${this.b ** 2 + 4 * this.a * this.c})/${2 * this.a}`
    );
    console.log(
      `x'' = (${-this.b} - √ ${this.b ** 2 + 4 * this.a * this.c})/${
        2 * this.a
      }`
    );

    const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
    const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
    if (Number.isInteger(Math.sqrt(delta))) {
      console.log(
        `x' = (${-this.b} + ${(this.b ** 2 + 4 * this.a * this.c) ** 0.5})/${
          2 * this.a
        }`
      );
      console.log(
        `x'' = (${-this.b} - ${(this.b ** 2 + 4 * this.a * this.c) ** 0.5})/${
          2 * this.a
        }`
      );
      console.log(
        `x' = (${-this.b + (this.b ** 2 + 4 * this.a * this.c) ** 0.5})/${
          2 * this.a
        }`
      );
      console.log(
        `x'' = (${-this.b - (this.b ** 2 + 4 * this.a * this.c) ** 0.5})/${
          2 * this.a
        }`
      );
      console.log(`x' = ${x1}`);
      console.log(`x'' = ${x2}`);
    }
    return x1 === x2 ? [x1] : [x1, x2];
  }
}

equation1 = new Equantion(1, -4, 5);
equation2 = new Equantion(0, -0, 5);
equation3 = new Equantion();
equation4 = new Equantion(0, 2, 6);

console.log(equation1.getRoots());
console.log(equation2.getRoots());
console.log(equation3.getRoots());
console.log(equation4.getRoots());
