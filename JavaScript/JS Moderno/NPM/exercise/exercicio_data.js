const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysToNextBday = nextBirthday.diff(today, "day");
  console.log(`Idade: ${ageInYears}
    Next Birthday: ${nextBirthday.format(
      "DD/MM/YYYY"
    )} (${daysToNextBday} days left to complete ${ageInYears + 1})`);
}

birthday("2005-04-08");
