// CFileProperties.js
// properties file class program

// declare module constant
const { Console } = require('console');
const Path = require('path');
const PropertieReader = require('properties-reader');

// Properties file class
class CFileProperties {

    // Constructor function for propertie file
    // declare class variable
    // param Filename, name of file
    // param Option, (new=create, open=open, )
    constructor(_Filename,_Option) {
        console.log("CFileProperties.js:CFileProperties:Constructor:Begin");
        this.Filename = _Filename;
        this.Option = _Option
        this.Propertie = new PropertieReader(this.Filename);
        this.KeyName = "";
        this.KeyValue = "";

        console.log("CFileProperties.js:CFileProperties:Constructor:Filename="+this.Filename+",Option="+this.Option)
    };

    // Read function of properties file
    // Read key properties file
    Search(_KeyName,_Option) {
        console.log("CFileProperties.js:CFileProperties:Read:Begin");
        this.KeyName = _KeyName;
        this.Option = _Option;
        this.KeyValue = this.Propertie.get(this.KeyName.valueOf());
        console.log("CFileProperties.js:CFileProperties:Read:"+this.KeyName+"="+this.KeyValue);
        return this.KeyValue;
    }

};

module.exports = CFileProperties