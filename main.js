// /server.js
// Exemple code 
console.log("server.js :"+" Begin");

// Declare global variable.
global.HomeDir = __dirname; // home folder of xspheres

// load require CServer.js file for declare CServer class for server web management
var CServer = require("./view/CServer.js");


console.log("HomeDir "+global.HomeDir);

var Server = new CServer();