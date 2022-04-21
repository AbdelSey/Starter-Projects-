const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", { highWaterMark: 90000 });

// default 64kb

// last buffer = remainder

// highWatermark - control size of the buffer

// const stream = createReadStream("./content/big.txt", {highWaterMark: 90000})
// const stream = createReadStream("./content/big.txt", {encoding: "utf8"})

stream.on("data", (result) => {
  console.log(result);
});

// check for an error
stream.on("error", (err) => console.log(err));
