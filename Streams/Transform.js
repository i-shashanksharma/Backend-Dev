const fs = require("fs");
const { Transform } = require("stream")

const upper = new Transform({
    transform(chunk, encoding, cb) {
        const modifiedData = chunk.toString().toUpperCase();
        cb(null, modifiedData)
    }
})

const removeVowel = new Transform({
    transform(chunk, encoding, cb) {
        let modifiedData = chunk.toString().replace(/[AEIOU]/g, "*");
        cb(null, modifiedData)
    }
})


const readStream = fs.createReadStream('./Info.txt');
const writeStream = fs.createWriteStream('./InfoOutput.txt');

// read - pipe - writestream

readStream
    .pipe(upper)
    .pipe(removeVowel)
    .pipe(writeStream)