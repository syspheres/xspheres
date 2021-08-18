// CFileProperties.js
// properties file class program

// declare module constant
const { Console } = require('console');
const Path = require('path');


// Properties file class
class CFileProperties {

    // Constructor function 
    // declare class variable
    // param Filename, name of file
    // param Option, (new=create, open=open, )
    constructor(Filename) {
        console.log("CFileProperties.js:CFileProperties:Constructor Begin");
        this.Filename = Filename;
        this.Type = "";

        // Extract extension file type
        this.Type = Path.extname(this.Filename);
        console.log("CFileProperties.js:CFileProperties:Constructor:extname "+this.Type)
    }

    // Open function of properties file
    // Open properties file
    Open() {
        console.log("CFileProperties.js:CFileProperties:Open: Begin");


    }

};

module.exports = CFileProperties