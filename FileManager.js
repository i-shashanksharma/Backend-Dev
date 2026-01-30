const fs = require("fs");

const args = process.argv.slice(2);
const command = args[0];

if (!command) {
    console.log("Please provide a command: read, write, copy, delete, list");
    process.exit(0);
}

switch (command) {

    case "read":
        fs.readFile(args[1], "utf8", (err, data) => {
            if (err) {
                console.log("Error reading file:", err.message);
                return;
            }
            console.log("File Content:\n", data);
        });
        break;

    case "write":
        fs.writeFile(args[1], args[2], (err) => {
            if (err) {
                console.log("Error writing file:", err.message);
                return;
            }
            console.log("File written successfully!");
        });
        break;

    case "copy":
        fs.copyFile(args[1], args[2], (err) => {
            if (err) {
                console.log("Error copying file:", err.message);
                return;
            }
            console.log("File copied successfully!");
        });
        break;

    case "delete":
        fs.unlink(args[1], (err) => {
            if (err) {
                console.log("Error deleting file:", err.message);
                return;
            }
            console.log("File deleted successfully!");
        });
        break;

    case "list":
        fs.readdir(args[1] || ".", (err, files) => {
            if (err) {
                console.log("Error reading directory:", err.message);
                return;
            }
            console.log("Directory Contents:");
            files.forEach(file => console.log(file));
        });
        break;

    default:
        console.log("Invalid command!");
}
