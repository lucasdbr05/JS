function arithmeticAverage(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0) / numbers.length;
}
console.log(`MEDIA ARITMETICA: ${arithmeticAverage(100, 50, 60)}`);

function median(...num) {
  parseFloat(num);
  let nums = [...num].sort((a, b) => a - b);
  console.log(nums);
  if (nums.length % 2 == 0) {
    return (
      (nums[parseInt(nums.length / 2)] + nums[parseInt(nums.length / 2 - 1)]) /
      2
    );
  } else {
    return nums[parseInt(nums.length / 2)];
  }
}

const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  );
  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );
  return sum / weightSum;
};

console.log(
  `Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
);

console.log(median(50, 100, 60, 1));

function mode(...nums) {
  let quantities = nums.map((num) => [
    num,
    nums.filter((n) => num == n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
}

console.log(mode(1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4));
