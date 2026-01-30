const fs = require("fs");
const path = require("path");

function sync(source, target) {
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }

    const files = fs.readdirSync(source);

    files.forEach(file => {
        const srcPath = path.join(source, file);
        const tgtPath = path.join(target, file);

        const stat = fs.statSync(srcPath);

        if (stat.isFile()) {
            if (!fs.existsSync(tgtPath)) {
                fs.copyFileSync(srcPath, tgtPath);
                console.log("Copied:", file);
            }
        }
    });
}

try {
    sync("./folder1", "./folder2");
    sync("./folder2", "./folder1");
    console.log("Folders synchronized successfully!");
} catch (err) {
    console.log("Error during synchronization:", err.message);
}
