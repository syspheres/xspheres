// CommonFile_include.js
// CommonFile class program
// contains common methods for use with all files opened with the Cfile class
console.log("/controller/file/CFile_include.js: Begin");

// Global system require Section
//console.log("/controller/file/CFile.js: require system section");
//const Vm = require("vm");
//const Fs = require("fs");
//const Path = require("path");


// CopyFile function CommonFile class
function CopyFile(_FileSource,_FileTarget) {
}

// Exist file function
function Exist(_FileName,_Option) {
    if (Fs.existsSync(_FileName)) {
        console.log("/controller/file/CFile_include.js: Exist: FileName="+_FileName+": File Exist");
        return true;
    } else {
        console.log("/controller/file/CFile_include.js: Exist: FileName="+_FileName+": File Not Exist");
        return false;
    };         
}
