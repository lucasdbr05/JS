function coinsDivisor(value) {
  dictNum = {};
  arrCoins = [1, 5, 10, 25, 100, 500];
  for (let i = arrCoins.length - 1; i >= 0; i--) {
    number = arrCoins[i];
    dictNum[number] = parseInt(value / number);
    value = value % number;
  }
  return dictNum;
}

console.log(coinsDivisor(999));
console.log(coinsDivisor(1784));
////////

function coins(num) {
  const coins = {
    500: 0,
    100: 0,
    25: 0,
    10: 0,
    5: 0,
    1: 0,
  };
  rest = num;

  coins["500"] = Math.floor(rest / 500);
  rest = rest % 500;

  coins["100"] = Math.floor(rest / 100);
  rest = rest % 100;

  coins["25"] = Math.floor(rest / 25);
  rest = rest % 25;

  coins["10"] = Math.floor(rest / 10);
  rest = rest % 10;

  coins["5"] = Math.floor(rest / 5);
  rest = rest % 5;

  coins["1"] = Math.floor(rest / 1);
  rest = rest % 1;

  return coins;
}

console.log(coins(577));
