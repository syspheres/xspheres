// example.js : Node.js program for test CFile class
// Use JSON Objet for call variable FileName
// for detect and read file

console.log("/example.js :"+" Begin");

console.log("/example.js: require CFile class");
var CFile = require("./CFile"); 


var Filename = "main.properties";
var Param = JSON.parse('{"Filename":"'+Filename+'","Action":"OPEN"}');

console.log("/example.js: create File objet with CFile class");
var File = new CFile(Param);   

console.log("/example.js :"+" End");
