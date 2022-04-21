const http = require("http");
const { readFileSync, readFile } = require("fs");

const homePage = readFileSync("./index.html");
const homePageCSS = readFileSync("./styles.css");
const homePageJS = readFileSync("./function.js");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homePageCSS);
    res.end();
  } else if (url === "/function.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homePageJS);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1> Wrong Page");
    res.end();
  }
});

server.listen(5000);
