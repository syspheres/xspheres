const express = require("express");
const logger = require("./ILog");

logger.log("debug", "Hello, Winston!");
logger.debug("The is the home '/' route.");

logger.error("Events Error: Unauthenticated user");

logger.info("Server Listening On Port 3000");