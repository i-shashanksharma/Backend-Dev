const os = require("os");
const fs = require("fs");

setInterval(() => {
    const data = `
Time: ${new Date().toLocaleString()}
Platform: ${os.platform()}
CPU: ${os.cpus()[0].model}
Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
---------------------------
`;

    fs.appendFile("System.log", data, (err) => {
        if (err) console.log("Error writing file");
    });
}, 5000);
