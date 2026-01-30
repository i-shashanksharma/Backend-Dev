// error handling
const { error } = require("console");
// console.log("first");

// try {
//     throw error("there is something wrong")
// } catch (error) {
//     console.log(error);
// }

// console.log("end");



const http = require("http");

const server=http.createServer((req,res)=>{
    try{
        throw new Error("there is something wrong");
    }catch(err){
        console.log(error.message);
    }
    res.end("server is running");
});

server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});