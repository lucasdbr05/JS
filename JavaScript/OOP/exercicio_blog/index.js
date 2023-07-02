const Author = require("./Author");

const lucas = new Author("Lucas Lima");
const post1 = lucas.writePost(
  "Where Gama goes, there I will be",
  "The government won't stop us. IJG!"
);
const post2 = lucas.writePost(
  "Where Gama goes, there I will be",
  "My white-greened, I came here support you. IJG!"
);

post1.addComment("BONDE", " A caravana nunca vai parar");
post1.addComment("IJG", " Dale dale");
console.log(post1);
console.log(post2);
console.log(lucas);
