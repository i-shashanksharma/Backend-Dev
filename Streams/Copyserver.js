const fs = require("fs")

const readStream = fs.createReadStream("./Log.txt");
const writeStream = fs.createWriteStream("./Output.txt");

// readStream.pipe(writeStream);    //// copy a file
// on is an event
readStream.on("data",(chunk)=> {
    let data = chunk.toString().toUpperCase();
    writeStream.write(data);
})

readStream.on("end",()=> {
    writeStream.end();
})