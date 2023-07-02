class Character {
  constructor(name, life, attack, defense) {
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.defense = defense;
  }
  attacking(target) {
    target.life -= this.attack - target.defense;
  }
}

class Thief extends Character {
  constructor(name, life, attack, defense) {
    super(name, life, attack, defense);
  }
  attacking(target) {
    target.life -= 2 * (this.attack - target.defense);
  }
}

class Mage extends Character {
  constructor(name, life, attack, defense, magic) {
    super(name, life, attack, defense);
    this.magic = magic;
  }
  attacking(target) {
    target.life -= this.magic + this.attack - target.defense;
  }
  increaseLife(target) {
    target.life += 2 * this.magic;
  }
}

class Warrior extends Character {
  constructor(name, life, attack, defense, shield) {
    super(name, life, attack, defense);
    this.shield = shield;
    this.position = "attack";
  }
  attacking(target) {
    if (this.position === "attack") {
      super.attacking(target);
    }
  }
  togglePosition() {
    if (this.position === "attack") {
      this.position = "defense";
      this.defense += this.shield;
    } else {
      this.position = "attack";
      this.defense -= this.shield;
    }
  }
}

const arthur = new Mage("Arthur", 90, 4, 2, 14);
const beatrice = new Thief("Beatrice", 140, 22, 8);
const cain = new Warrior("Cain", 200, 14, 12, 4);

console.table({ arthur, beatrice, cain });

cain.togglePosition();
arthur.attacking(cain);
beatrice.attacking(arthur);

console.table({ arthur, beatrice, cain });

cain.togglePosition();
cain.attacking(arthur);
arthur.increaseLife(arthur);
beatrice.attacking(cain);

console.table({ arthur, beatrice, cain });
