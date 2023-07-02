function createLicense(name, lastName, birthday) {
  let initial =
    lastName.length >= 5
      ? lastName.slice(0, 5).toUpperCase()
      : lastName.slice(0, lastName.length).toUpperCase() +
        "9" * (5 - lastName.length);
  let birthday_date = new Date(birthday);
  let seventh = birthday[2];
  let eigth_nineth = birthday.split("-")[1];
  let tenth = birthday[3];
  let last = name[0].toLowerCase();
  return {
    name,
    lastName,
    birthday_date,
    flightLicense: `${initial}-${seventh}${eigth_nineth}${tenth}.${last}`,
  };
}

console.log(createLicense("Lucas", "Lima", "2005-04-08"));
console.log(createLicense("Poe", "Dameron", "1979-03-09"));
/////
class Pilot {
  constructor(firstName, lastName, birthday) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthday = new Date(birthday);
    this.flightLicense = false;
  }

  generateFlyingLicense() {
    let initial =
      this.lastName.length >= 5
        ? this.lastName.slice(0, 5).toUpperCase()
        : this.lastName.slice(0, this.lastName.length).toUpperCase() +
          "9" * (5 - this.lastName.length);
    let seventh = this.birthday.getFullYear().toString()[2];
    let eigth_nineth = this.getFullMonth();
    let tenth = this.birthday.getFullYear().toString()[3];
    let last = this.firstName[0].toLowerCase();
    this.flightLicense = `${initial}-${seventh}${eigth_nineth}${tenth}.${last}`;
  }
  getFullMonth() {
    if (this.birthday.getMonth() < 9) {
      return `0${this.birthday.getMonth() + 1}`;
    } else {
      return `${this.birthday.getMonth() + 1}`;
    }
  }
}
const pilot_lucas = new Pilot("Lucas", "Lima", "04-08-2005");
pilot_lucas.generateFlyingLicense();
console.log(pilot_lucas);
