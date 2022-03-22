// CFile.js
// file class program
// Path Module
console.log("/controller/file/CFile.js: Begin");

// Global system require Section
//console.log("/controller/file/CFile.js: require system section");
const Vm = require("vm");
const Fs = require("fs");
const Path = require("path");

// Global XSpheres Require Class section
//console.log("/controller/file/CFile.js: require Xspheres Class section");


// Global Include Section
//console.log("/controller/file/CFile.js: runInThisContext section");
//DelVm.runInThisContext(Fs.readFileSync(global.HomePath + "main_include.js"));
eval(Fs.readFileSync(global.HomePath + "main_include.js")+'');

//Vm.runInThisContext(Fs.readFileSync(global.ControllerFilePath + "CommonFile_include.js"));
eval(Fs.readFileSync(global.ControllerFilePath + "CFile_include.js")+'');

// CFile class
class CFile {

    // Constructor function 
    // declare class variable
    // param Filename, name of file
    // param Option,
    constructor(_FileName,_Option) {

        this.FileName = "";
        this.Type = "";
        this.Option = "";
        this.File = "";

        // Extract extension file type
        this.FileName=_FileName;
        this.Action=_Option;
        this.Type = Path.extname(this.FileName);
        console.log("/controller/file/CFile.js: CFile: Constructor: filename="+this.FileName+":extname="+this.Type+":Action="+this.Action);

        // Test the file type and loading elements according to the file type
        switch(this.Type) {
            case '.properties' :
                // if properties file, load class file
                var CType = require("./CFileProperties");
                this.File = new CType(this.FileName,this.Action);
                break;

            case '.json' :
                // if json file, load class file
                var CType = require("./CFileJson");
                this.File = new CType(this.FileName,this.Action);
                break;
        };
    };

    // Read function for read all type file
    Open(_Option) {
        return this.File.Open(_Option);
    }

    // Read function for read all type file
    Search(_Key,_Option) {
        return this.File.Search(_Key,_Option);
    }

};

module.exports = CFile