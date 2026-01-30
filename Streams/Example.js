const http=require("http");

const server=http.createServer((req,res)=>{
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Server is running");
    } else if (req.method === "GET" && req.url === "/about") {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    } else if (req.method === "GET" && req.url === "/user") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const ww={name:"John",age:30};

        res.end(JSON.stringify(ww));
    }
    else if (req.method === "POST" && req.url === "/uppercase") {

        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const uppercaseData = body.toUpperCase();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Uppercase data", data: uppercaseData }));
        });
    }
    else if (req.method === "POST" && req.url === "/replace") {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const replacedData = body.replace(/[aeiouAEIOU]/g, '*');
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Replaced data", data: replacedData }));
        });
    }
    else {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("400 Bad Request");
    }

});

server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});