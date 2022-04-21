const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} with id: ${id}`);
});

customEmitter.on("response", (name, id) => {
  console.log(`hello ${name} with id:${id}`);
});

// the order matters - emit goes after "on"

// call event
customEmitter.emit("response", "john", 24);

const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

// using event emitter api

const server = http.createServer();

// emits request event
// subscribe to it / listen for it / respond to it

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.end("Welcome");
  } else if (req.url === "/about.html") {
    res.end("good job! you know what you're doing");
  }
});

server.listen(5000);
