// CServer.js
// express server class program 
// fs module
// http listen module
// https listen module

// declare local require constant
const Express = require('express');
const Http = require('http');
const Https = require('https');

// Global Include Section
Vm.runInThisContext(Fs.readFileSync(global.HomeDir + "/main_include.js"));

// express server class
class CServer {

    // Constructor function 
    // declare class variable
    constructor() {

        // declare class variable
        this.Server = Express();
        this.PortHttp = "";
        this.PortHttps = "";
        this.PrivateKey = "";
        this.Certificate = "";
        this.Passphrase = "";
        this.Credential = "";

        // Declare locale require section
        var CFile = require(global.HomePath+"/controller/file/CFile");

        // open and search properties in CServer.properties file
        var FileName = __dirname+"/CServer.properties";
        console.log("CServer.js: CServer: FileName="+FileName+",Option=OPEN");
        var PropertieFile = new CFile(FileName,"OPEN");

        // load port, provate key, certificate, and passphrase from CServer.properties file
        this.PortHttp = PropertieFile.Search('server.port.http','');
        this.PortHttps = PropertieFile.Search('server.port.https','');
        this.PrivateKey = Fs.readFileSync(PropertieFile.Search('certificate.keyname',''));        // read private key file on synchrone mode      
        this.Certificate = Fs.readFileSync(PropertieFile.Search('certificate.name',''));      // read certificate file on synchrone mode
        this.Passphrase = PropertieFile.Search('certificate.passphrase','');
        this.Credential = {key: this.PrivateKey, cert: this.Certificate, passphrase: this.Passphrase};       // Create json object

        // Create http server and https server
        this.ServerHttp = Http.createServer(this.Server);
        this.ServerHttps = Https.createServer(this.Credential, this.Server);
    }

    // Open function of express server
    // Delare listen and get methode in server class
    Open() {

        //get express application instance
        this.Server.get('/', (req, res) => {
            console.log("CServer.js: CServer: Open: get");
            res.send('Hello World');
        });

        // Listen a http port with error management
        this.ServerHttp.listen(this.PortHttp, (Err) => {
            if(Err){
                console.log(Err);
            } else {
                console.log("CServer.js: CServer: Open: listen: Listen on http://localhost:" + this.PortHttp);
            }
        });

        // Listen a https port with error management
        this.ServerHttps.listen(this.PortHttps, (Err) => {
            if(Err){
                console.log(Err);
            } else {
                console.log("CServer.js:CServer:Open: listen: Listen on on https://localhost:" + this.PortHttps);
            }
        });

    }

};

module.exports = CServer