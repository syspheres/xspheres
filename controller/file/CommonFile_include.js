// CommonFile_include.js
// CommonFile class program

// CommonFile class
// contains common methods for use with all files opened with the Cfile class
class CommonFile {

    // constructor function
    // for common file
    // Param Filename : name of file
    // Option : Option of execute class
    constructor(_FileName,_FileOption) {
        console.log("CommonFile_include.js: CommonFile: constructor: _Filename="+_FileName+", _FileOption="+_FileOption);
    };

    CopyFile(_FileSource,_FileTarget) {


    }

    IfFileExists(_FileName,_FileOption) {
        // Test the if the file exists
        try {
            Fs.accessSync(_FileName, Fs.constants.F_OK);
            console.log("CommonFile_include.js: CommonFile: IfFileExist: FileName="+_FileName+": File Exist");
            return true;
            } catch (err) {
            console.log("CommonFile_include.js: CommonFile: IfFileExist: FileName="+_FileName+": File Not Exist");
            // test if CREATE in Option
            // Copy File.Model in File
            if (this.Option.includes("CREATE")) {
                console.log("CFileJson.js:CFileJson:Constructor:"+this.Filename+":Copy Json file");

                try {
                    console.log("CFileJson.js:CFileJson:Constructor:"+this.Filename+":File Create");
                } catch (err) {
                    console.log("CFileJson.js:CFileJson:Constructor:"+this.Filename+":File cannot Create");
                }                        
            };            
            return false;
            } 
    }
};
