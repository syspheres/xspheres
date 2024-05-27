// AppCLog.js
// main program for test Clogs class
console.log("AppCLog: Begin");
const Winston = require("winston");

var Logs = require("./CLog");                                                // Require for load CLogs.js file

// Open and create CLogs instance
console.log("winston_class.js: new Ilogs=Clogs");
global.ILogs = new Logs();                                                   // Create Global Instance CLOgs class

// console.log("winston_class.js: Ilogs.createLogger");
// Logger=ILogs.createLogger();                                              // call createLogger CLOgs class function

console.log("winston_class.js: Emergency message");
ILogs.Emergency('Emergency message');                                      // Call display message emergency level 

console.log("winston_class.js: End");1