// /main.js
// main program of xspheres system 
console.log("/main.js: "+"Begin");

// global variable section
console.log("/main.js: global variable section");
global.HomeDir = __dirname;
console.log("main.js: global.HomeDir="+global.HomeDir);
global.HomePath = global.HomeDir+"/";
console.log("main.js: global.HomePath="+global.HomePath);
global.DataPath = global.HomePath+"data/";
console.log("main.js: global.DataPath="+global.DataPath);
global.ControllerPath = global.HomePath+"controller/";
console.log("main.js: global.ControllerPath="+global.ControllerPath);
global.ControllerFilePath = global.ControllerPath+"file/";
console.log("main.js: global.ControllerFilePath="+global.ControllerFilePath);

// Global file for use 
global.MainFile = global.DataPath+"data/main/main.json";
console.log("main.js: global.MainFile="+global.MainFile);


// Global Require Section
console.log("main.js: include section");
Vm = require("vm");
Fs = require("fs");
Path = require('path');

// Global Include Section
Vm.runInThisContext(Fs.readFileSync(global.HomeDir + "/main_include.js"));

// Global Local Require Section
console.log("main.js: local require section");
var CFile = require("./controller/file/CFile");
var CServer = require("./view/server/CServer"); 


console.log("main.js: local variable section");
var FileName;
var FileOption;
var FileParam;
var SystemName;

// open and reach properties in main.properties file
FileName = __dirname+"/main.properties";
console.log("main.js: CFile class: Filename="+FileName+",Option=OPEN");
var PropertieFile = new CFile(FileName,"OPEN");
SystemName = PropertieFile.Search('main.name','');

// Create a ./data/main/main.json file
FileName = global.DataPath+"main/main.json"
console.log("main.js: CFile class: Filename="+FileName+",Option=OPEN,CREATE");
var MainJson = new CFile(global.MainFile,"OPEN,CREATE");


// declare class server described in CServer.js
// open server
var Server = new CServer();                     
Server.Open();    

console.log("main.js: "+"End");