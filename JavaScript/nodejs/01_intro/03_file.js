const fs = require("fs"); //built-in function from nodejs: files creation and manipulation

//create a new file
fs.writeFile("text.txt", "Hello NodeJS", (err) => {
  console.log(err);
});

//append a new text to file
fs.appendFile("text.txt", "\nHello NodeJS", (err) => {
  console.log(err);
});

/* 
//rename file
fs.rename("test.txt", "text.txt", (err) => {
    console.log(err);
});

//remove file
fs.unlink( "text.txt", (err) => {
    console.log(err);
});
*/

console.log(__dirname);
console.log(__filename);
