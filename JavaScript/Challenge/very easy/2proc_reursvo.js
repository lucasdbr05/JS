function chunk(num) {
  if (num === 0) {
    return "";
  } else if (num == 1) {
    return "chunk";
  } else {
    return "chunk-" + chunk(num - 1);
  }
}

console.log(chunk(7));

///////////////////
function chunks(num) {
  if (num == 0) return "";
  return num === 1 ? "chunk" : "chunk-" + chunks(num - 1);
}

console.log(chunks(10));
