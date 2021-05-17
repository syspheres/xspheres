// Cserver.js
// class file 

const Express = require ('Express');


// constructor class server 
class CServer {
    constructor() {
        console.log("Cserver.js:CServer:Constructor Begin");
        this.Server = Express(); 
        this.Port = 8080;
    };

    Open() {
        console.log("CServer.js:CServer:CServer.get : Begin");
        this.Server.listen(this.Port, (Err) => {
            if(Err){
                console.log(Err);
            } else {
                console.log("CServer.js:CServer:Open:listen: Http Server listening on http://localhost:" + this.Port);
            }
        });
    }

};

module.exports = CServer