const http = require("http");

const server = http.createServer((req, res) => {
  const baseUrl = "http://localhost:3000";
  const parsedUrl = new URL(req.url, baseUrl);

  const pathname = parsedUrl.pathname;

  if (req.method === "GET" && pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to our Node.js HTTP Server!");

  }

  else if (req.method === "GET" && pathname === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1><p>This is a simple Node.js HTTP server.</p>");

  }

  else if (req.method === "GET" && pathname === "/user") {
    const name = parsedUrl.searchParams.get("name") || "Guest";
    const age = parsedUrl.searchParams.get("age") || "Not provided";

    const userData = {
      name: name,
      age: age
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(userData));
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
