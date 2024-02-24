// CLogs.js
// this example describe tu use Winston library in class context Node.js
// Configure rotatelog 
const Winston = require("winston");                                                 // import winston module in constante
const Path = require("path");                                                       // import path module in constante
const logFolder = "./logs/";                                                // constante for logfile folder 
const WinstonRotate = require('winston-daily-rotate-file');                          // import winston dayly logrotate npm package

class CLogs {
    constructor() {
      console.log("CLogs.js: constructor: Begin");
      var logLevels = {                                                                 // begin declarevar log levels for Clogs instance
        emergency: 0,                                                                     // Emergency Log Level
        alert: 1,                                                                         // Alert log Level
        critical: 2,                                                                      // Critical log Level
        error: 3,                                                                         // Error Log Level
        warning: 4,                                                                       // Warning Log Level
        notice: 5,                                                                        // Notice Log Level
        http: 6,                                                                          // Http Log Level
        info: 7,                                                                          // Info Log Level
        debug: 8,                                                                         // Debug Log Level
        trace: 9                                                                          // Trace Log Level
      };                                                                                // End declare var Log levels for CLogs instance
      var logLevel = "http";                                                            // Declare log level default
     
      console.log("CLogs.js: constructor: logLevel="+logLevel);

      console.log("CLogs.js: constructor: End");
    }                                                                                   // Class CLogs for Winston Node.js

    createLogger() {                                                                    // Begin createLogger Winston Function
      console.log("CLogs.js: createLogger: Begin");

      const { combine, timestamp, json, printf, align } = Winston.format;               // Declare constante for winstown format

      const logger = Winston.createLogger({                                             // Create a logger
        levels: this.logLevels,                                                         // load logLevels in logger 
        level: 'http',                                                                  // set the loglevel
        // you can change the format of DateTime
        // you can format log line with printf 
        //format: combine(timestamp(), json()),                                         // line log format with timestamp and json
        format: combine(                                                                // combine many format option
          timestamp({                                                                   // timestamp format begin
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',                                        // Timestamp format structure
          }),                                                                           // Timestamp format end
          align(),                                                                      // Align option of format log line
          json(),                                                                       // json format line log 
          // printf log line
          printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
        ),
        transports: [
          // Display Winston message in console
          new Winston.transports.Console(),                                             // Display in console
    
          // for create a  logfile in addition to the console
          // but log message accumulate in this file
          // Display Winston Messages level in log File
          new Winston.transports.File({                                                 // configure log File Begin
            filename: logFolder+'test_all.log',                                         // Filename of log file
          }), 
        ], 
      });                                                                               // End createLogger Winston Function

      console.log("CLogs.js: createLogger: End");
    }

    Emergency(Msg) {                                                                     // Begin Emergency Winston Function

    }  
                                          
};

module.exports = CLogs