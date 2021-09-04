// /main.js
// main program of xspheres system 
console.log("/main.js:"+" Begin");

// Require section
console.log("/main.js: require section");
var CFile = require("./controller/file/CFile");
var CServer = require("./view/server/CServer"); 
console.log("/main.js: variable section");
var FileName;
var FileOption;
var FileParam;
var SystemName;

// home folder of xspheres
global.HomePath = __dirname+"/";
global.DataPath =  global.HomePath+"data"+"/";
console.log("main.js:HomeDir="+global.HomeDir); 

// Read main.properties file
FileName = global.HomePath+"main.properties";
console.log("/main.js:CFile class:Filename="+FileName+",Option=OPEN");
var MainPropertie = new CFile(FileName,"OPEN");
SystemName = MainPropertie.Search('main.name','');

// Create a ./data/main/main.json file
FileName = global.DataPath+"main.json";
console.log("/main.js:CFile class:Filename="+FileName+",Option=OPEN,CREATE");
//var MainJson = new CFile(FileName,"OPEN,CREATE");


// declare class server described in CServer.js
// open server
var Server = new CServer();                     
Server.Open();    

console.log("/main.js :"+" End");