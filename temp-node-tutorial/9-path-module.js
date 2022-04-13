const path = require("path");

console.log(path.sep);

const filePath = path.join("./content", "subfolder", "test.txt");

console.log(filePath);

// get the last file using base

const base = path.basename(filePath);

console.log(base);

// gives you an absoulte path.

const absoulte = path.resolve(__dirname, "content", "subfolder", "text.txt");

console.log(absoulte);
