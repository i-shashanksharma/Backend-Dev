// module path
const fs = require("fs")

// absolute path
const path = require("path");    ////
const absolutePath = path.resolve("./log.txt");
console.log(absolutePath);
console.log(__dirname);
console.log(path.basename('./log.txt'));   // filename - log
console.log(path.extname('./notes/log.txt'));   // filename = .txt

const joinPath = path.join(__dirname, "notes", "log.txt");
console.log(joinPath);

const pathParse = path.parse(joinPath);
console.log(pathParse);

const fs = require("fs");                                    //
const filePath = path.join(__dirname,"log.txt");             //  
const data = fs.readFileSync(filePath, "utf-8");             //
console.log(data);                                           //

// http method
// 1. get -> read
// 2. post -> create
// 3. put -> update
// 4. delete -> delete
// 5. patch -> partial update

// Api
const http = require("http");

const server = http.createServer((req, res)=> {
    console.log(req.url);
    console.log(req.method);

    res.writeHead(200, {"content-yype": "text/html"})
    res.write("<h1> welcome </h1>")
    // res.end("hello from hp");
    res.end();
});

server.listen(2000,()=> {
    console.log("Server is listening on port 2000");
    
});