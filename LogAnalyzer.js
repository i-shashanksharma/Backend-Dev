const fs = require("fs");
const readline = require("readline");

const fileStream = fs.createReadStream("log.txt");

const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

let totalLines = 0;
let errorCount = 0;
let infoCount = 0;
let warningCount = 0;

rl.on("line", (line) => {
    totalLines++;

    if (line.includes("ERROR")) errorCount++;
    else if (line.includes("INFO")) infoCount++;
    else if (line.includes("WARNING")) warningCount++;
});

rl.on("close", () => {
    console.log("\nLog File Summary Report");
    console.log("------------------------");
    console.log("Total Lines:", totalLines);
    console.log("Errors:", errorCount);
    console.log("Info:", infoCount);
    console.log("Warnings:", warningCount);
});
