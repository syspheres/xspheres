// AppLogger.js
// main program for test require Include logger file
const ThisFile="AppLogger.js"                                                       // Constant for name of this file for console log
console.log(ThisFile + " : Begin");

console.log(ThisFile + " : require ILog.js");
const logger = require("./ILogger");                                                // Require for load RLogger.js file

// Test Emergency logger
console.log(ThisFile + " : logger emergecy Message");
logger.emergency('emergency message');                                           // Call display message emergency level 

console.log(ThisFile + " : end");