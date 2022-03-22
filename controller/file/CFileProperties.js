// CFileProperties.js
// properties file class program
console.log("/controller/file/CFileProperties.js: Begin");

// Global system require Section
//console.log("/controller/file/CFileProperties.js: require system section");
const Vm = require("vm");
const Fs = require("fs");
const Path = require("path");

// declare module constant
//const { Console } = require('console');
const PropertieReader = require('properties-reader');


// Global Include Section
eval(Fs.readFileSync(global.HomePath + "main_include.js")+'');
eval(Fs.readFileSync(global.ControllerFilePath + "CFile_include.js")+'');


// Properties file class
class CFileProperties {

    // Constructor function for propertie file
    // declare class variable
    // param Filename, name of file
    // param Option, (new=create, open=open, )
    constructor(_FileName,_Option) {
        console.log("/controller/file/CFileProperties.js: CFileProperties: Constructor: Filename="+_FileName+",Option="+_Option)

        this.FileName = _FileName;
        this.Option = _Option
        this.Propertie = ""
        //this.Propertie = new PropertieReader(this.FileName);
        this.KeyName = "";
        this.KeyValue = "";  

        if (OptionAnalyse("EXIST",_Option,"OPEN"))
            this.Open(this.Option);

    };

    // Open function of properties file
    Open(_Option) {
        console.log("/controller/file/CFileProperties.js: CFileProperties: FileName="+this.FileName+": Open");
        var _ReturnValue;

        if (Exist(this.FileName,"")) {
            this.Propertie = new PropertieReader(this.FileName);
        };
        
        return _ReturnValue;
    }


    // Read function of properties file
    // Read key properties file
    Search(_KeyName,_Option) {
        console.log("/controller/file/CFileProperties.js: CFileProperties: FileName="+this.FileName+": Search:"+_KeyName+": Open="+_Option);
        var ReturnValue;
        this.KeyName = _KeyName;
        this.Option = _Option;
        this.KeyValue = this.Propertie.get(this.KeyName.valueOf());
        ReturnValue = this.KeyValue

        return ReturnValue;
    }

};

module.exports = CFileProperties