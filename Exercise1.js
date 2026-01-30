const fs = require("fs");

fs.readFile("Input.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }

    const words = data.trim().split(/\s+/).length;

    fs.writeFile("Output.txt", "Total Words: " + words, (err) => {
        if (err) {
            console.log("Error writing file");
        } else {
            console.log("Word count written to Output.txt");
        }
    });
});
