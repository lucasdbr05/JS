function sortArray(...arr) {
  mainArray = [];
  for (let i = 0; i < arr.length; i++) {
    innerArr = arr[i];
    for (let j = 0; j < innerArr.length; j++) {
      mainArray.push(innerArr[j]);
    }
  }
  return mainArray.sort((a, b) => a - b);
}

console.log(sortArray([1, 5, 7], [9, 10, 2], [14, 3]));
//////

function flatAndSort(arr) {
  const newArr = [];
  arr.forEach((numbers) => {
    newArr.push(...numbers);
  });
  return newArr.sort((a, b) => a - b);
}

console.log(
  flatAndSort([
    [1, 5, 7],
    [9, 10, 2],
    [14, 3],
  ])
);
