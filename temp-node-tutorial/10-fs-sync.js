const { readFileSync, writeFileSync, write, writeFile } = require("fs");

// same thing as

// const fs = require('fs')
// fs.readFileSync

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
