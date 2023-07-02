function inverse(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    newArray.push(array[i]);
  }
  return newArray;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(inverse(array));
console.log(array);
///////////

function reversed(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[array.length - i - 1];
  }
  return newArray;
}
let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reversed(arrays));
console.log(arrays);
