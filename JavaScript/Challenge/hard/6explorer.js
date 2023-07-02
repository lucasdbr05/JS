class Explorer {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.experience = 0;
    this.expToNextLevel = 110;
    this.knownPlanets = [];
    this.terrainExpertise = {};
    this.alive = true;
  }

  get rank() {
    if (this.level < 10) return "Newbie";
    if (this.level < 30) return "Explorer";
    if (this.level < 50) return "Veteran";
    if (this.level < 80) return "Elite";
    if (this.level < 99) return "Master";
    if (this.level < 99) return "Master";
    if (this.level < 99) return "Master";
    return "Legend";
  }

  static explorationHandler = {
    pacific: (diceResult) => (diceResult >= 5 ? 15 : 0),
    neutral: (diceResult) => (diceResult >= 7 ? 25 : 0),
    hostile: (diceResult) => (diceResult >= 9 ? 50 : 10),
  };

  gainExperience(pts) {
    this.experience += pts;

    //Max level
    if (this.level == 99) {
      return;
    }

    if (pts >= this.expToNextLevel) {
      //Level up
      this.level++;

      const newExpToNextLevel =
        100 + 10 * this.level - (pts - this.expToNextLevel);
      this.expToNextLevel = this.level != 99 ? newExpToNextLevel : 0;
      console.log(`Você subiu de nível! 
            Exepriência para o próximo nível: ${this.expToNextLevel}`);
    } else {
      this.expToNextLevel -= pts;
    }
  }

  explore(planet) {
    if (!this.alive) {
      console.log("You're dead");
      return;
    }
    const { id, hostility, terrain } = planet;

    //Throw dices
    const dice1 = Math.floor(1 + Math.random() * 5);
    const dice2 = Math.floor(1 + Math.random() * 5);

    // Result with bonus (if  applied)
    const bonus = this.terrainExpertise[terrain] > 2 ? 1 : 0;
    const dices = dice1 + dice2 + bonus;
    console.log(`Rolled ${dice1} and ${dice2} ${bonus ? "+1 bônus" : ""}`);

    //Check for critical
    if (dices >= 12) {
      this.terrainExpertise[terrain] = this.terrainExpertise + 1 || 1;
    }

    //Check for critical failure
    if (dices === 2 && hostility === "hostile") {
      console.log("You died.");
      this.alive = false;
      return;
    }

    const handler = Explorer.explorationHandler[hostility];
    const obtainedExp = handler(dices);

    this.gainExperience(obtainedExp);

    //Handle result
    if (obtainedExp > 10) {
      const planetAlreadyExplored = this.knownPlanets.find(
        (planet) => planet.id === id
      );
      if (!planetAlreadyExplored) {
        this.knownPlanets.push(planet);
      }
      console.log(`Success! Earned ${obtainedExp} exp.`);
    } else {
      console.log(`Failure! Earned ${obtainedExp} exp.`);
    }
  }
}

const lucas = new Explorer("Lucas");

const tatooine = {
  id: 1,
  name: "Tatooine",
  hostility: "pacific",
  terrain: "desert",
};
const brasil = {
  id: 2,
  name: "Brasil",
  hostility: "hostile",
  terrain: "forest",
};
const goias = { id: 3, name: "Goias", hostility: "neutral", terrain: "snow" };
const fluminense = {
  id: 4,
  name: "Fluminense",
  hostility: "hostile",
  terrain: "desert",
};

setInterval(() => {
  lucas.explore(tatooine);
  lucas.explore(fluminense);
  lucas.explore(goias);
  lucas.explore(brasil);
  console.log(lucas);
}, 1000 * 5);
