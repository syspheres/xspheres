// CServer.js
// express server class program 
// fs module
// http listen module
// https listen module

// declare module constant
const Express = require('express');
const Fs = require('fs');
const Http = require('http');
const Https = require('https');


// express server class
class CServer {

    // Constructor function 
    // declare class variable
    constructor() {
        console.log("Cserver.js:CServer:Constructor Begin");
        this.Server = Express();
        this.PortHttp = 80;
        this.PortHttps = 443;

        // read private key, certificate in synchrone mode
        this.PrivateKey = Fs.readFileSync('./data/server/xspheres_key.pem');        // read private key file on synchrone mode
        this.Certificate = Fs.readFileSync('./data/server/xspheres_cert.pem');      // read certificate file on synchrone mode
        this.Passphrase = "xspheres";                                       // Passphrase 
        this.Credential = {key: this.PrivateKey, cert: this.Certificate, passphrase: this.Passphrase};       // Create json object

        // Create http server and https server
        this.ServerHttp = Http.createServer(this.Server);
        this.ServerHttps = Https.createServer(this.Credential, this.Server);
    }

    // Open function of express server
    // Delare listen and get methode in server class
    Open() {
        console.log("CServer.js:CServer:CServer.get : Begin");

        //get express application instance
        this.Server.get('/', (req, res) => {
            console.log("CServer.js:CServer:Open:get: begin");
            res.send('Hello World');
        });

        // Listen a http port with error management
        this.ServerHttp.listen(this.PortHttp, (Err) => {
            console.log("CServer.js:CServer:Open:ServerHttp.listen: begin");
            if(Err){
                console.log(Err);
            } else {
                console.log("CServer.js:CServer:Open:listen: Listen on http://localhost:" + this.PortHttp);
            }
        });

        // Listen a https port with error management
        this.ServerHttps.listen(this.PortHttps, (Err) => {
            console.log("CServer.js:CServer:Open:ServerHttps.listen: begin");
            if(Err){
                console.log(Err);
            } else {
                console.log("CServer.js:CServer:Open:listen: Listen on on https://localhost:" + this.PortHttps);
            }
        });

    }

};

module.exports = CServer