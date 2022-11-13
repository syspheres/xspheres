// main_require.js code for all js file
// load require <Class>.js common for all xsphere
console.log("/log.include.js: log include section");

// var CMain = require("./CMain");
// var CFile = require("./controller/file/CFile");
// var CServer = require("./view/server/CServer");
// Constant and require for log
const Winston = require("winston");                             // import winston module in constante
const WinstonRotate = require('winston-daily-rotate-file');     // import winston daily logrotate package
const logLevels = {                                             // xspheres log levels values
    emergency: 0,   // system integrity error, stop system and involves corrective action
    critical: 1,    // system integrity suppose, can continue but data lost, data reinitiaze
    error: 2,       // Error context on system, developper must see and correct context
    warning: 3,     // abnormal context on system, minor error must correct code or properties file
    http: 4,        // probleme encontered in http server, must view by developper for correction
    alert: 5,       // specific context encountered but management by the program 
    notice: 6,      // notice level, file begin and end
    info: 7,        // info level, require, system and class begin and end
    trace: 8,       // trace level, function begin and end 
    debug: 9        // level for display line code and variable significative value.
  };
// Winston format line
const { combine, timestamp, json, printf, align } = Winston.format;

// For all level, create a filter for log only value
// For select only one level log in Log File with filter
const emergencyFilter = Winston.format((info, opts) => {  
  return info.level === 'emergency' ? info : false;       // select level for filter
});

const criticalFilter = Winston.format((info, opts) => {  
  return info.level === 'critical' ? info : false;       // select level for filter
});

const errorFilter = Winston.format((info, opts) => {  
  return info.level === 'error' ? info : false;       // select level for filter
});

const alertFilter = Winston.format((info, opts) => {  
  return info.level === 'alert' ? info : false;       // select level for filter
});

const warningFilter = Winston.format((info, opts) => {  
  return info.level === 'warning' ? info : false;       // select level for filter
});

const httpFilter = Winston.format((info, opts) => {  
  return info.level === 'http' ? info : false;       // select level for filter
});

const noticeFilter = Winston.format((info, opts) => {  
  return info.level === 'notice' ? info : false;       // select level for filter
});

const infoFilter = Winston.format((info, opts) => {  
  return info.level === 'info' ? info : false;       // select level for filter
});

const debugFilter = Winston.format((info, opts) => {  
  return info.level === 'debug' ? info : false;       // select level for filter
});

const traceFilter = Winston.format((info, opts) => {  
  return info.level === 'trace' ? info : false;       // select level for filter
});





