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
    constructor(Param) {
        console.log("CFile.js:CFile:Constructor Begin");
        this.Filename = "";
        this.Type = "";
        this.Option = "";

        // Extract extension file type
        this.Filename=Param.Filename;
        this.Action=Param.Action;
        this.Type = Path.extname(this.Filename);
        console.log("CFile.js:CFile:Constructor:filename "+this.Filename)
        console.log("CFile.js:CFile:Constructor:extname "+this.Type)

        // Extract Option Action
        console.log("CFile.js:CFile:Constructor:Action "+this.Action)
    }

    // Open function of express server
    // Delare listen and get methode in server class
    Open() {
        console.log("CFile.js:CFile:Open: Begin");


    }

};

module.exports = CFile