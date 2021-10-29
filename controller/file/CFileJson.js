// CFileJson.js
// Json file class program

// Declare constante json object
const ClassFile = '{"Class":"CLASSNAME"}';

// Global Include Section
Vm.runInThisContext(Fs.readFileSync(global.HomePath + "main_include.js"));
//Vm.runInThisContext(Fs.readFileSync(global.ControllerFilePath + "CommonFile_include.js"));

// Properties file class
class CFileJson extends CommonFile {

    // Constructor function for propertie file
    // declare class variable
    // param Filename, name of file
    // param Option, (OPEN=open, CREATE=create)
    constructor(_FileName,_Option) {

        super(_FileName,_Option);
        
        this.FileName = _FileName;
        this.Option = _Option;
        this.KeyName = "";
        this.KeyValue = "";
        this.StringJson;
        this.ObjectJson;

        console.log("CFileJson.js: CFileJson: Constructor: FileName="+this.FileName+",Option="+this.Option);

        // Test if file exist
        // If not exist and Option CREATE, copy file model in file
        var ReturnFunction = this.IfFileExists(this.FileName,this.Option);
        console.log("CFileJson.js: CFileJson: Constructor: FileName="+this.FileName+", IfFileExist="+ReturnFunction);


/*
        // Test the if the file exists
        try {
            Fs.accessSync(this.Filename, Fs.constants.F_OK);
            console.log("CFileJson.js:CFileJson:Constructor:"+this.Filename+":File Exist");
            } catch (err) {
                console.log("CFileJson.js:CFileJson:Constructor:"+this.Filename+":File Not Exist");
                // test if CREATE in Option
                if (this.Option.includes("CREATE")) {
                    console.log("CFileJson.js:CFileJson:Constructor:"+this.Filename+":Create Json file");

                    try {
                        console.log("CFileJson.js:CFileJson:Constructor:"+this.Filename+":File Create");
                    } catch (err) {
                        console.log("CFileJson.js:CFileJson:Constructor:"+this.Filename+":File cannot Create");
                    }                        
                };
            }
  */
        };

    // Open function of json file
    Open(_Option) {
//        console.log("CFileJson.js:CFileJson:"+this.Filename+"Open:Begin:Option="+_Option);

        var ReturnValue;

        console.log("CFileJson.js: CFileJson:"+this.FileName+": Open:Return="+ReturnValue);
        return ReturnValue;
    }

    // Search function of json file
    // Search key json file
    Search(_KeyName) {
//        console.log("CFileJson.js:CFileJson:"+this.Filename+":Search:Begin");
        var ReturnValue = "";

        console.log("CFileJson.js: CFileJson:"+this.FileName+": Search:Return="+ReturnValue);
        return ReturnValue;
    }

    // Replace uppercase word in json file
    // by variable name.
    ReplaceWord(_Word,_Value) {

    }

};

module.exports = CFileJson