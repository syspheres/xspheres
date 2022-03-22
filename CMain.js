//CMain.js
//main class program
console.log("/CMain.js: Begin");

// Global system require Section
//console.log("/CMain.js: require system section");
//const Vm = require("vm");
const Fs = require("fs");
//const Path = require("path");

//console.log("/CMain.js: require Xspheres Class section");
var CFile = require("./controller/file/CFile");

// Global Include Section
//console.log("/CMain.js: runInThisContext section");
//Vm.runInThisContext(Fs.readFileSync(global.HomePath + "main_include.js"));
eval(Fs.readFileSync(global.HomePath + "main_include.js")+'');

class CMain {
    // Constructor CMain function
    constructor(_Object) {
        console.log("/CMain.js: constructor: Begin");
        this.ClassName="CMain";
        this.PropertieFile="";
        this.SystemName="";
        this.JsonFile=global.DataPath+this.ClassName+".json";

        this.Properties();

    };

    Properties() {
        var _FileName=__dirname+"/"+this.ClassName+".properties";
        console.log("/CMain.js: CMain: Filename="+_FileName+",Option=OPEN");
        this.PropertieFile = new CFile(_FileName,"OPEN");
//        this.SystemName = PropertieFile.Search('main.name','');
    }

    Json() {
        console.log("/CMain.js: CMain: Filename="+_FileName+",Option=OPEN");
        var _FileName=__dirname+"/"+this.ClassName+".json.model";

    }

};

module.exports = CMain

