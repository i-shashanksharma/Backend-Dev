const fs = require("fs").promises
const path = require("path")

const filePath = path.join(__dirname, "log.txt")

async function readLogFile() {
  try {
    const data = await fs.readFile(filePath, "utf-8")
    console.log(data)
  } catch (err) {
    console.error(err.message)
  }
}

async function writeLogFile(content) {
  try {
    await fs.writeFile(filePath, content, "utf-8")
    console.log("File written")
  } catch (err) {
    console.error(err.message)
  }
}

async function appendLogFile(content) {
  try {
    await fs.appendFile(filePath, content, "utf-8")
    console.log("Content appended")
  } catch (err) {
    console.error(err.message)
  }
}

async function deleteLogFile() {
  try {
    await fs.unlink(filePath)
    console.log("File deleted")
  } catch (err) {
    console.error(err.message)
  }
}
;

(async () => {
  await writeLogFile("new log data\n")
  await appendLogFile("this is append log data\n")
  await readLogFile()
  await deleteLogFile()
})()