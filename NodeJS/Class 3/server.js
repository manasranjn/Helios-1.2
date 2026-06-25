const fs = require('fs').promises;
const path = require('path');

//! Define a Folder and File path
const folderPath = path.join(__dirname, 'asyncFolder')
const filePath = path.join(folderPath, "example.txt")

//? Step-1: Create a folder is not exist
async function createFolder() {
    try {
        await fs.access(folderPath)
        console.log("Folder available");
    }
    catch (err) {
        await fs.mkdir(folderPath)
        console.log("Folder created successfully")
    }
}

// createFolder()

//? Step-2: Create a file and write data into it
async function createFile() {
    try {
        await fs.writeFile(filePath, "Hello World! This is an example of async file system operations in NodeJS.")
        console.log("File created and data written successfully")
    }
    catch (err) {
        console.error("Error creating file:", err)
    }
}

// createFile()

//? Step-3: Read the file content
async function readFile() {
    try {
        const data = await fs.readFile(filePath, 'utf-8')
        console.log("File content:", data)
    }
    catch (err) {
        console.error("Error reading file:", err)
    }
}
// readFile()

//? Step-4: Append data to the file
async function appendToFile() {
    try {
        await fs.appendFile(filePath, "\nThis line is appended to the file.")
        console.log("Data appended successfully")
    }
    catch (err) {
        console.error("Error appending to file:", err)
    }
}

// appendToFile()

//? Step-5: Delete the file
async function deleteFile() {
    try {
        await fs.unlink(filePath)
        console.log("File deleted successfully")
    }
    catch (err) {
        console.error("Error deleting file:", err)
    }
}

// deleteFile()