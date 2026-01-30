const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "log.txt")

function readLogFile() {
  try {
    const data = fs.readFileSync(filePath, "utf-8")
    console.log(data)
  } catch (err) {
    console.error(err.message)
  }
}

function writeLogFile(content) {
  try {
    fs.writeFileSync(filePath, content, "utf-8")
    console.log("File written")
  } catch (err) {
    console.error(err.message)
  }
}

function appendLogFile(content) {
  try {
    fs.appendFileSync(filePath, content, "utf-8")
    console.log("Content appended")
  } catch (err) {
    console.error(err.message)
  }
}

function deleteLogFile() {
  try {
    fs.unlinkSync(filePath)
    console.log("File deleted")
  } catch (err) {
    console.error(err.message)
  }
};

writeLogFile("new log data\n")
appendLogFile("this is append log data\n")
readLogFile()
deleteLogFile()