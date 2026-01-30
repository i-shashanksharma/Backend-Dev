// import
const http = require('http');

const server = http.createServer((req,res)=> {
    console.log("url" + req.url);
    console.log("Http method" + req.method);

    ////// res.writeHead(200,{
    //////     "content-type":"text/html",
    //////     "userinfo":"this is my user"
    ////// })

    res.end("hello");
})

server.listen(3000,()=>{
  console.log("server is running ")
})







// send json data
// const http = require('http');
// const server = http.createServer((req,res)=>{

//   let user = {
//     username:"shashank",
//     email: "qwerty@gmail.com"
//   }

//   res.writeHead(200,{
//     "content-type":"application/json"
//   })

//   res.end(JSON.stringify({
//     sucess:"true",
//     user
//   }));

// })

// server.listen(3000,()=>{
//   console.log("server is running ")
// })

// const fs = require("fs")
// const http = require('http');

// const server = http.createServer((req,res)=> {

//   fs.readFile("./public/index.html",'utf-8',(err,data)=> {

//     if(err) {
//       res.end("server error")
//     }

//     res.writeHead(200,{
//       "content-type":"'text/html"
//     })

//     res.end(data);
  
//   })
// })

// server.listen(3001,()=>{
//   console.log("server is running ")
// })



//  if-else

// const fs=require('fs');
// const http=require('http');

// const server=http.createServer((req,res)=>{
//     fs.readFile('./public/index.html','utf-8',(err,data)=>{
//         if(err){
//             res.end('Error loading file');
//         }
//     })
//     if(req.url==='/index'){
//         res.writeHead(200,{'content-type':'text/html'});
//         res.end(data);
//     }
//     else if(req.url==='/about'){
//         fs.readFile('./public/about.html','utf-8',(err,data)=>{
//             if(err){
//                 res.end('Error loading file');
//             }
//         })
//         res.writeHead(200,{'content-type':'text/html'});
//         res.end(data);
//     }
// });

// server.listen(3000,()=>{
//     console.log('Server is running on port 3000');
// });

























// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname;

//   if (req.method === "GET" && pathname === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to our Node.js HTTP Server!");

//   } else if (req.method === "GET" && pathname === "/about") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>About Page</h1><p>This is a simple Node.js HTTP server.</p>");

//   } else if (req.method === "GET" && pathname === "/user") {
//     const { name, age } = parsedUrl.query;

//     const userData = {
//       name: name || "Shashank",
//       age: age || "20"
//     };

//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(userData));

//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Page Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });



// const http = require("http");
// const server = http.createServer((req,res)=> {
//     const baseUrl = "http://localhost:3000";
//     const parsedUrl = new URL(req.url, baseUrl);

//     // const path = parsedUrl.pathname
//     // const hostname = parsedUrl.hostname

//     console.log(parsedUrl);
//     res.end("server is running");
// })

// server.listen(3000,()=> {
//     console.log("server is running");
// })





// let arr = ["apple", "mango", "Joe"]

// // const fruit = arr[0];
// // const fruit2 = arr[1];
// // const name = arr[2];

// // destructuring
// const {fruit, fruit2, name} = arr;