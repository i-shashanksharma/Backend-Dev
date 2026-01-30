const http = require("http");

let todos = [];
let id = 1;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");

    if (req.method === "GET" && url.pathname === "/todos") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(todos));
    }

    else if (req.method === "POST" && url.pathname === "/todos") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            const data = JSON.parse(body);
            const todo = { id: id++, task: data.task };
            todos.push(todo);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify(todo));
        });
    }

    else if (req.method === "PUT" && url.pathname.startsWith("/todos/")) {
        const todoId = parseInt(url.pathname.split("/")[2]);
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            const data = JSON.parse(body);
            const todo = todos.find(t => t.id === todoId);
            if (todo) {
                todo.task = data.task;
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(todo));
            } else {
                res.writeHead(404);
                res.end("Not Found");
            }
        });
    }

    else if (req.method === "DELETE" && url.pathname.startsWith("/todos/")) {
        const todoId = parseInt(url.pathname.split("/")[2]);
        todos = todos.filter(t => t.id !== todoId);
        res.writeHead(204);
        res.end();
    }

    else {
        res.writeHead(404);
        res.end("Route Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
