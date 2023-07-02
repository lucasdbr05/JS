function average(...numeros) {
  let somatorio = 0;
  for (let i = 0; i < numeros.length; i++) {
    somatorio += numeros[i];
  }
  let media = somatorio / numeros.length;
  console.log(media);
  return media;
}

average(10, 8, 7, 9);

///////////////////////

function average(...numeros) {
  const sum = numeros.reduce((accumulate, num) => {
    return accumulate + num;
  }, 0);
  let media = sum / numeros.length;
  console.log(media);
  return media;
}

average(9, 8, 6, 9);
