class Tracker {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.sector(this.x, this.y, this.z);
    this.distance(this.x, this.y, this.z);
  }

  sector(x, y, z) {
    if (x >= 0 && y >= 0 && z >= 0) return console.log(`Sector: ${"Alpha"}`);
    if (x >= 0 && y >= 0 && z < 0) return console.log(`Sector: ${"Beta"}`);
    if (x >= 0 && y < 0 && z >= 0) return console.log(`Sector: ${"Gama"}`);
    if (x >= 0 && y < 0 && z < 0) return console.log(`Sector: ${"Delta"}`);
    if (x < 0 && y >= 0 && z >= 0) return console.log(`Sector: ${"Epsilon"}`);
    if (x < 0 && y >= 0 && z < 0) return console.log(`Sector: ${"Zeta"}`);
    if (x < 0 && y < 0 && z >= 0) return console.log(`Sector: ${"Sigma"}`);
    if (x < 0 && y < 0 && z < 0) return console.log(`Sector: ${"Omega"}`);
  }

  distance(x, y, z) {
    this.distance = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
    return console.log(`Distance: ${this.distance}`);
  }
}

const tracker1 = new Tracker(37, 42, 15);
console.log(tracker1);
const tracker2 = new Tracker(144, 4, 0);
console.log(tracker2);
const tracker3 = new Tracker(-37, 0, 0);
console.log(tracker3);
const tracker4 = new Tracker(-19, -80, -32);
console.log(tracker4);

/////
console.log("---------------------");
class Point {
  constructor(x = 0, y = 0, z = 0) {
    this.coordinates = [x, y, z];
    this.sector();
    this.distance();
  }

  static sectors = {
    "+++": "Alpha",
    "++-": "Beta",
    "+-+": "Gama",
    "+--": "Delta",
    "-++": "Epsilon",
    "-+-": "Zeta",
    "--+": "Sigma",
    "---": "Omega",
  };

  sector() {
    const signs = this.coordinates
      .map((coordinate) => (coordinate >= 0 ? "+" : "-"))
      .join("");
    return console.log(`Sector: ${Point.sectors[signs]}`);
  }

  distance() {
    this.distance = Math.sqrt(
      this.coordinates.reduce((accum, coord) => accum + coord ** 2, 0)
    );
    return console.log(`Distance: ${this.distance}`);
  }
}

const p1 = new Point(37, 42, 15);
console.log(p1);
const p2 = new Point(144, 4, 0);
console.log(p2);
const p3 = new Point(-37, 0, 0);
console.log(p3);
const p4 = new Point(-19, -80, -32);
console.log(p4);
