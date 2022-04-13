const http = require("http");

// incoming requests
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about.html") {
    res.end("here is our short history");
  }
  res.end(`<h1> Oops! </h1>
  <p> We can't seem to find the page. Sorry! </p>
  <a href="/"> Back Home </a> `);
});

// make the server listen and select what port.
server.listen(5000);
