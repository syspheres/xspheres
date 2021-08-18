// /main.js
// main program of xspheres system 
console.log("/main.js :"+" Begin");

// home folder of xspheres
global.HomeDir = __dirname;  
console.log("/main.js: HomeDir "+global.HomeDir);                   

// load require CServer.js file for declare CServer class for server web management
console.log("/main.js : require CServer class");
var CServer = require("./view/server/CServer"); 
console.log("/main.js : require CFile class");     


// declare class server described in CServer.js
// open server
var Server = new CServer();                     
Server.Open();    

console.log("/main.js :"+" End");