// CFile.js
// file class program
// Path Module

// declare module constant
const Path = require('path');

// file class
class CFile {

    // Constructor function 
    // declare class variable
    // param Filename, name of file
    // param Option,
    constructor(_FileName,_FileOption) {
        console.log("/controller/file/CFile.js:CFile:Constructor Begin");
        console.log("/controller/file/CFile.js:CFile:Constructor Filename="+_FileName+",Option="+_FileOption);
        this.Filename = "";
        this.Type = "";
        this.Option = "";
        this.File = "";

        // Extract extension file type
        this.Filename=_FileName;
        this.Action=_FileOption;
        this.Type = Path.extname(this.Filename);
        console.log("/controller/file/CFile.js:CFile:Constructor:filename "+this.Filename)
        console.log("/controller/file/CFile.js:CFile:Constructor:extname "+this.Type)

        // Extract Option Action
        console.log("CFile.js:CFile:Constructor:Action "+this.Action)

        // Test the file type and loading elements according to the file type
        switch(this.Type) {
            case '.properties' :
                // if properties file, load class file
                var CType = require("./CFileProperties");
                this.File = new CType(this.Filename,this.Action);

//            case '.json' :
//                // if json file, load class file
//                var CType = require("./CFileJson");
//                this.File = new CType(this.Filename,this.Action);
        };
    };

    // Read function for read all type file
    Search(_Key,_Option) {
        return this.File.Search(_Key,_Option);
    }
};

module.exports = CFile