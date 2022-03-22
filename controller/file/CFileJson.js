// CFileJson.js
// Json file class program
// Global system require Section

console.log("/controller/file/CFileJson.js: Begin");
const Vm = require("vm");
const Fs = require("fs");
const Path = require("path");

// Declare constante json object
const ClassFile = '{"Class":"CLASSNAME"}';

// Global Include Section
eval(Fs.readFileSync(global.HomePath + "main_include.js")+'');
eval(Fs.readFileSync(global.ControllerFilePath + "CFile_include.js")+'');

// Properties file class
class CFileJson {

    // Constructor function for propertie file
    // declare class variable
    // param Filename, name of file
    // param Option, (OPEN=open, CREATE=create)
    constructor(_FileName,_Option) {
        
        this.FileName = _FileName;
        this.Option = _Option;
        this.KeyName = "";
        this.KeyValue = "";
        this.StringJson;
        this.ObjectJson;

        console.log("CFileJson.js: CFileJson: Constructor: FileName="+this.FileName+",Option="+this.Option);

        // Test if option include "INITIALYZE"
        if (OptionAnalyse("EXIST",this.Option,"INITIALYZE")) {
            console.log("CFileJson.js: CFileJson: Constructor: INITIALYZE")

            // INITIALYZE run following function
            // IFEXIST
            // COPYFROM=file
            var _ReturnFunction = this.IfExist(this.FileName,this.Option);
        }


        // Test if file exist
        // If not exist and Option CREATE, copy file model in file
 //       var ReturnFunction = this.IfFileExists(this.FileName,this.Option);
 //       console.log("CFileJson.js: CFileJson: Constructor: FileName="+this.FileName+", IfFileExist="+ReturnFunction);

        // Test if Open Option
        if (OptionAnalyse("EXIST",this.Option,"OPEN")) {

        }

        };

    // Open function of json file
    Open(_Option) {
        var ReturnValue;

        console.log("CFileJson.js: CFileJson:"+this.FileName+": Open:Return="+ReturnValue);
        return ReturnValue;
    }

    // Search function of json file
    // Search key json file
    Search(_KeyName) {
//        console.log("CFileJson.js:CFileJson:"+this.Filename+":Search:Begin");
        var ReturnValue = "";

        console.log("CFileJson.js: CFileJson:"+this.FileName+": Search:Return="+ReturnValue);
        return ReturnValue;
    }

    // Replace uppercase word in json file
    // by variable name.
    ReplaceWord(_Word,_Value) {

    }

};

module.exports = CFileJson