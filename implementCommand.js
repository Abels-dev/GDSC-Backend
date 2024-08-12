const fs = require("fs");

const createFile = (fileName, msg) => {
   fs.writeFile(fileName, msg, (err) => {
      if (err) console.log(err);
      console.log("file created successfully");
   });
};
const deleteFile = (fileName) => {
   fs.unlink(fileName, (err) => {
      if (err) console.log(err);
      console.log("file deleted successfully");
   });
};
const readFile = (fileName) => {
   fs.readFile(fileName, "utf8", (err, data) => {
      if (err) console.log(err);
      console.log(data);
   });
};
const renameFile = (oldFileName, newFileName) => {
   fs.rename(oldFileName, newFileName, (err) => {
      if (err) console.log(err);
      console.log("file renamed successfully");
   });
};

//deleteFile('./oldFile.txt')
//renameFile("./newFile.txt","./oldFile.txt")