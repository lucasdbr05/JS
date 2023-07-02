const results = [];

function searchConnections(data) {
  Object.entries(data).forEach(([key, value]) => {
    if (key === "connection") {
      results.push([value._id, value.label]);
    }

    if (key === "connections") {
      value.forEach((connection) => {
        results.push([connection._id, connection.label]);
      });
    }

    if (Array.isArray(value)) {
      // check if the value is and array of objects(dictionary)
      value.forEach((innerObject) => {
        searchConnections(innerObject);
      });
    } else if (Object.prototype.toString.call(value) === ["object Object"]) {
      //check if the value is an object(dictionary), what the function hopes for
      searchConnections(value);
    }
  });
  return results;
}

console.table(searchConnections(require("./files_5/data-0.json")));
console.log("___");
console.table(searchConnections(require("./files_5/data-1.json")));
console.log("___");
console.table(searchConnections(require("./files_5/data-2.json")));
