// CommonFile_include.js
// CommonFile class program
// contains common methods for use with all files opened with the Cfile class
console.log("/controller/file/CommonFile_include.js: Begin");

// Global system require Section
//console.log("/controller/file/CFile.js: require system section");
const Vm = require("vm");
const Fs = require("fs");
const Path = require("path");

class CommonFile {

    // constructor function
    // for common file
    // Param Filename : name of file
    // Option : Option of execute class
    constructor(_FileName,_FileOption) {
        console.log("/controller/file/CommonFile_include.js: CommonFile: constructor: _Filename="+_FileName+", _FileOption="+_FileOption);
    };

    // CopyFile function CommonFile class
    CopyFile(_FileSource,_FileTarget) {


    }

    /*
    IfExist(_FileName,_FileOption) {
        // Test the if the file exists
        if (Fs.ExistsSync(_FileName)) {
            console.log("/controller/file/CommonFile_include.js: CommonFile: IfFileExist: FileName="+_FileName+": File Exist");
            return true;
        } else {
            console.log("/controller/file/CommonFile_include.js: CommonFile: IfFileExist: FileName="+_FileName+": File Not Exist");
            return false;
        };           

        
        try {
            Fs.accessSync(_FileName, Fs.constants.F_OK);
            console.log("/controller/file/CommonFile_include.js: CommonFile: IfFileExist: FileName="+_FileName+": File Exist");
            return true;
            } catch (err) {
            console.log("/controller/file/CommonFile_include.js: CommonFile: IfFileExist: FileName="+_FileName+": File Not Exist");
            return false;
        }
        
    }
    */

    IfFileExists(_FileName,_FileOption) {
        // Test the if the file exists
        if (Fs.existsSync(_FileName)) {
            console.log("/controller/file/CommonFile_include.js: CommonFile: IfFileExist: FileName="+_FileName+": File Exist");
            return true;
        } else {
            console.log("/controller/file/CommonFile_include.js: CommonFile: IfFileExist: FileName="+_FileName+": File Not Exist");
            return false;
        };         

        /*
        try {
            Fs.accessSync(_FileName, Fs.constants.F_OK);
            console.log("/controller/file/CommonFile_include.js: CommonFile: IfFileExist: FileName="+_FileName+": File Exist");
            return true;
            } catch (err) {
            console.log("/controller/file/CommonFile_include.js: CommonFile: IfFileExist: FileName="+_FileName+": File Not Exist");
            
            // Test AnalyseOption
            var _File = OptionAnalyse("VALUE",_FileOption,"COPYFROM");
            console.log("/controller/file/CommonFile_include.js: CommonFile: IfFileExist: CopyFrom="+_File);

            return false;
        }
        */

    }
};
