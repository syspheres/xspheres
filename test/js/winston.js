// Create this example in /test/js folder
// create log file in /test/log folder

console.log("/test/winston.js: Begin");                                             // display console message begin program
const Winston = require("winston");                                                 // import winston module in constante
const Path = require("path");                                                       // import path module in constan
const logFolder = __dirname+"/logs/";                                               // constante for logfile folder                                                   
console.log("/test/winston.js: logFolder="+logFolder);                              // Display logFolder variable


// Import winston-daily-rotate-file npm package
const WinstonRotate = require('winston-daily-rotate-file');                         // import winston dayly logrotate package

// Re-créate a new loglevel  values
const logLevels = {                                                                 // you can create local log level value
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
};

// you can formating log line with 2 options
// you can format log line with printf
// const {combine, timestamp, json} = Winston.format;                               // add a timestamp in json format
const { combine, timestamp, json, printf, align } = Winston.format;                 // Construct winstown format
//const logLevel = 'http';                                                          // default Log Level is http 


console.log("/test/winwston.js: argv : "+process.argv[2]);                          // display consolde argv
if (typeof(process.argv[2]) == "undefined") {                                       // test if not log level argument
  var logLevel = 'http';                                                            // default Log Level is http     
}                                                                                   // end test
else {                                                                              // test else if log level argument
  var logLevel = process.argv[2];                                                   // default loglevel 
};                                                                                  // End else test
const defaultLogLevel = logLevel;                                                   // defaultLogLevel constant 
console.log("/test/winwston.js: argv : defaultLogLevel="+defaultLogLevel);                 // display default log level


// For select only on level log in Log File with filter
const errorFilter = Winston.format((info, opts) => {                                // begin configuration errorFilter constant
  return info.level === 'error' ? info : false;                                     // select level for filter
});                                                                                 // end winston format filter

console.log("/test/winwston.js: logFolder="+logFolder);

const logger = Winston.createLogger({                                               // Create a logger
  levels: logLevels,                                                                // load logLevels in logger 
  level: 'http',                                                                    // set the loglevel
  // you can change the format of DateTime
  // you can format log line with printf 
  //format: combine(timestamp(), json()),                                           // line log format with timestamp and json
  format: combine(                                                                  // combine many format option
    timestamp({                                                                     // timestamp format begin
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',                                          // Timestamp format structure
    }),                                                                             // Timestamp format end
    align(),                                                                        // Align option of format log line
    json(),                                                                         // json format line log 
    // printf log line
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),

    // Transports winston parts allow you to configure
    transports: [
      // Display Winston message in console
      new Winston.transports.Console(),                                             // Display in console

      // for create a  logfile in addition to the console
      // but log message accumulate in this file
      // Display Winston Messages level in log File
      new Winston.transports.File({                                                 // configure log File Begin
        filename: logFolder+'test_all.log',                                         // Filename of log file
      }),                                                                           // This transport part end

      // for create a log file with logrotatefile
      new Winston.transports.DailyRotateFile({                                      // configure logrotatefile begin
        filename: logFolder+'test_all-%DATE%.log',                                  // Filename of log with date 
        datePattern: 'YYYY-MM-DD',                                                  // date pattern format
        maxFiles: '14d',                                                            // nbr of days max retention log file
      }),                                                                           // This transport part end

      // for log error level in specific log file
      // Display Winston Error messages and sublevels in a log file 
      new Winston.transports.File({                                                 // Display in file Begin
        filename: logFolder+'test_err.log',                                         // Filename of log error file
        level: 'error',                                                             // Level and Under are log in logfile  
      }),                                                                           // This transport part end

      // for create error log file with logrotatefile
      new Winston.transports.DailyRotateFile({                                      // configure logrotatefile begin
        filename: logFolder+'test_err-%DATE%.log',                                  // Filename of error log with date 
        datePattern: 'YYYY-MM-DD',                                                  // date pattern format
        maxFiles: '14d',                                                            // nbr of days max retention log file
        level: 'error',                                                             // level and sublevel w'll be in log file
      }),                                                                           // This transport part end

      // For only log the error level in error file 
      // Display only error Winston Error messages in a log file 
      new Winston.transports.File({                                                 // Display in file Begin
        filename: logFolder+'test_flt_err.log',                                     // Filename of log error file
        level: 'error',                                                             // Level and Under are log in logfile 
        format: combine(errorFilter()),                                             // Spécific format for this transport
      }),                                                                           // This transport part end

      // for create error log file with logrotatefile
      new Winston.transports.DailyRotateFile({                                      // configure logrotatefile begin
        filename: logFolder+'test_flt_err-%DATE%.log',                              // Filename of error log with date 
        datePattern: 'YYYY-MM-DD',                                                  // date pattern format
        maxSize: '500m',                                                            // max file size ob log                 
        maxDays: '3d',                                                              // max days max retention log file
        level: 'error',                                                             // Level and Under are log in logfile
        format: combine(errorFilter()),                                             // Spécific format for this transport
      }),                                                                           // This transport part end

    ],                                                                              // End of transport section
  });                                                                               // End a logger.


  // Test loglevel message 
  // In this example with http level, only error, warn,info and http message display
  // The level must match with logLevels values
 
  var File="winston.js";
  var LogFile="LogFile";
  var Function="Main";
  var Ff=File+' : '+Function+' :  ';                                                 // concat File and Function in Ff Variable
  logger.emergency(Ff+'Emergency message');                                         // display message emergency level 
  logger.alert(Ff+'Alert message');                                                 // display message alert level 
  logger.critical('Critical message');                                              // display message critical level 
  logger.error('Error message');                                                    // display message error level  
  logger.warning('Warning message');                                                // Display message warning level    
  logger.notice('Notice message');                                                  // Display message notice level 
  logger.http('http message');                                                      // Display message http level                           
  logger.info('Info message');                                                      // Display message infos level
  logger.debug('debug message');                                                    // Display message debug level
  logger.trace('Trace message');                                                    // Display message trace level

console.log("/winston.js: End")