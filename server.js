const fs = require("fs");
//FS IS A MODULE DEFAULT IN NODE

console.log("line 1");
/*  read  
fs.readFile("./index.html", "utf8", (err, res) => {
  if (err) {
    console.log("erreu");
  }
  const content = res;

  console.log(content);
});*/
//  hade hia create
/*console.log("wch klheam");
fs.writeFile("page3.html", "safJJJJJaesafaesafae", () => {
  console.log("blan ");
});
*/
fs.appendFile("pagezz3.html", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});

fs.writeFile("index.html", "This is my text", function (err) {
  if (err) throw err;
  console.log("Replaced!");
});

fs.unlink("pagejjj3.html", function (err) {
  if (err) {
    console.log("nth to delet");
  } else {
    console.log("File deleted!");
  }
});

console.log("yeeeees");

//HTTP REQUEST
