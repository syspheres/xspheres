console.log("/test.js: Begin");
const Winston = require("winston");                 // import winston module in constante

const logger = Winston.createLogger({               // create a logger in constant 
    level: 'info',                                  // for infos level
    format: Winston.format.json(),                  // in json format
    transports: [new Winston.transports.Console()], // display in console
  });                                               // End a logger.

  

console.log("/test.js: End")