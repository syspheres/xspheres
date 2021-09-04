// CFileJson.js
// Json file class program

// declare module constant
const { Console } = require('console');
const Path = require('path');

// Properties file class
class CFileJson {

    // Constructor function for propertie file
    // declare class variable
    // param Filename, name of file
    // param Option, (OPEN=open, CREATE=create)
    constructor(_Filename,_Option) {
        console.log("CFileJson.js:CFileJson:Constructor:Begin");
        this.Filename = _Filename;
        this.Option = _Option;
        this.KeyName = "";
        this.KeyValue = "";

        console.log("CFileJson.js:CFileJson:Constructor:Filename="+this.Filename+",Option="+this.Option);

        // testing if file exist
        // if not exist and option contains create, creatinf json file

    };

    // Read function of json file
    // Read key json file
//    Read(LKeyName) {
//        console.log("CFileProperties.js:CFileProperties:Read:Begin");
//        this.KeyName = LKeyName;
//        this.KeyValue = this.Propertie.get(this.KeyName.valueOf());
//        console.log("CFileJson.js:CFileJson:Read:"+this.KeyName+"="+this.KeyValue);
//        return this.KeyValue;
//    }

};

module.exports = CFileJson