// /main.js
// main program of xspheres system
File="/main.js";
Function="";
console.log("/main.js: Begin");

// Constant system require Section
const Fs = require("fs");

// global variable section
console.log("/main.js: Global Section");
global.HomeDir = __dirname;
global.HomePath = global.HomeDir+"/";
global.DataPath = global.HomePath+"data/";
global.ControllerPath = global.HomePath+"controller/";
global.ControllerFilePath = global.ControllerPath+"file/";

// Eval Include Section
console.log("/main.js: Eval Section");
eval(Fs.readFileSync(global.HomePath + "main_include.js")+'');
eval(Fs.readFileSync(global.HomePath + "log_include.js")+'');


// Global XSpheres Require Class section
var CMain = require("./CMain");
var CFile = require("./controller/file/CFile");
var CServer = require("./view/server/CServer"); 

// read main.properties file
// open and reach properties in main.properties file
FileName = global.HomeDir+"/main.properties";
var PropertieFile = new CFile(FileName,"OPEN");
global.systemName = PropertieFile.Search('main.name','');
global.defaultLogLevel = PropertieFile.Search('log.defaultLevel','');

// Global file for use 
global.MainFile = global.DataPath+"main/main.json";
console.log("/main.js: global.MainFile="+global.MainFile);


// Open and create Main instance
var MainOption = "";
global.IMain = new CMain(MainOption);


//console.log("/main.js: local variable section");
var FileName;
var FileOption;
var FileParam;
var SystemName;

// open and reach properties in main.properties file
//FileName = __dirname+"/main.properties";
//console.log("main.js: CFile: Filename="+FileName+",Option=OPEN");
//var PropertieFile = new CFile(FileName,"OPEN");
//SystemName = PropertieFile.Search('main.name','');

// Create a ./data/main/main.json file
//FileName = global.DataPath+"main/main.json"
//FileOption="INITIALYZE="+__dirname+"/main.json.model";
//console.log("/main.js: CFile class: Filename="+FileName+",Option="+FileOption);
//var MainJson = new CFile(global.MainFile,FileOption);


// declare class server described in CServer.js
// open server
var Server = new CServer();                     
Server.Open();    

console.log("/main.js: "+"End");