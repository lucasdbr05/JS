const process = require("process"); //built-in function from nodejs: data input and output

//console.log(process.argv);

console.log("Type your name:   ");
process.stdin.on("data", (keybord) => {
  process.stdout.write(`User text: ${keybord}`);
  process.exit();
});
