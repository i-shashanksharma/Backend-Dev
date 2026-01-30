const fs = require("fs");
const http = require("http");

//
// fs.readFile('./output.txt', "utf-8", (err,data)=> {
//     console.log(data);
// })

// const readStream = fs.createReadStream("./output.txt", {
//     highWaterMark: 64*1024
// })

// readStream.on("data", (chunk)=> {
//     console.log(chunk.toString());
// })


const writeStream = fs.createWriteStream("./Info.txt", {
    flags:"a"    //// for append
})

writeStream.write("\nThis is some text")
writeStream.write("\nThis is some text")
writeStream.write("\nThis is some text")

writeStream.end()

writeStream.on("finish", ()=> {
    console.log("writing finish");
})