// /main.js
// main program of xspheres system 
console.log("server.js :"+" Begin");

// home folder of xspheres
global.HomeDir = __dirname;                     

// load require CServer.js file for declare CServer class for server web management
var CServer = require("./view/CServer");        


console.log("HomeDir "+global.HomeDir);

// declare class server described in CServer.js
// open server
var Server = new CServer();                     
Server.Open();                                  