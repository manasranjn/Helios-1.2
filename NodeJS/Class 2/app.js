const fs = require('fs');
const path = require('path');

// console.log(fs);

//! Define a Folder and File path
const folderPath = path.join(__dirname, 'syncFolder')
const filePath = path.join(folderPath, "example.txt")

// console.log(folderPath);
// console.log(filePath);


//? Step-1: Create a direcotory id it does not exist
if (!fs.existsSync(folderPath)) {
    //* Create a directory
    fs.mkdirSync(folderPath);
    console.log("Directory created successfully");
}

//? Step-2: Create a file and write some data into it
// fs.writeFileSync(filePath, "Hello, this is an example file created using NodeJS File System module.");
// console.log("File created and data written successfully");


//? Step-3: Append or add multiple lines of data to the file
// fs.appendFileSync(filePath, "\nThis is an additional line of text added to the file.");
// console.log("Data appended to the file successfully");

//? Step-4: Read the content of the file
// const content = fs.readFileSync(filePath, 'utf-8');
// console.log(content);

//? Step-5: Rename the file
const newFilePath = path.join(folderPath, "renamed_example.txt");
// fs.renameSync(filePath, newFilePath);
// console.log("File renamed successfully");

//? Step-6: Delete the file     
fs.unlinkSync(newFilePath);
console.log("File deleted successfully");