// CFileProperties.js
// properties file class program

// declare module constant
const { Console } = require('console');
const PropertieReader = require('properties-reader');

// Global Include Section
Vm.runInThisContext(Fs.readFileSync(global.HomePath + "main_include.js"));
//Vm.runInThisContext(Fs.readFileSync(global.ControllerFilePath + "CommonFile_include.js"));

// Properties file class
class CFileProperties extends CommonFile {

    // Constructor function for propertie file
    // declare class variable
    // param Filename, name of file
    // param Option, (new=create, open=open, )
    constructor(_FileName,_Option) {

        super(_FileName,_Option);
        
        this.FileName = _FileName;
        this.Option = _Option
        this.Propertie = new PropertieReader(this.FileName);
        this.KeyName = "";
        this.KeyValue = "";

        console.log("CFileProperties.js: CFileProperties: Constructor: Filename="+this.FileName+",Option="+this.Option)
    };

    // Open function of properties file
    Open(_Option) {
 //       console.log("CFileProperties.js:CFileProperties:"+this.Filename+":Open:Begin");
        var ReturnValue;
        // No action for open properties file
        console.log("CFileProperties.js: CFileProperties: "+this.FileName+": Open: Return="+ReturnValue);
        return ReturnValue;
    }


    // Read function of properties file
    // Read key properties file
    Search(_KeyName,_Option) {
//        console.log("CFileProperties.js:CFileProperties:"+this.Filename+":Search:Begin:KeyName="+_KeyName+":Begin");
        var ReturnValue;
        this.KeyName = _KeyName;
        this.Option = _Option;
        this.KeyValue = this.Propertie.get(this.KeyName.valueOf());
        ReturnValue = this.KeyValue
        console.log("CFileProperties.js: CFileProperties: "+this.FileName+": Search:"+this.KeyName+"="+ReturnValue);
        return ReturnValue;
    }

};

module.exports = CFileProperties