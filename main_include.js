// this main include javascript code

/*
The OptionAnalyse function analyzes the value of the option.
Call parameter:
Analyse : Analyse Option
Option : Option value
value : Value of Analyse
*/
function OptionAnalyse(_Analyse,_Option,_Value) {
    var _UnitOption = _Option.split(',');

    console.log("/main_include.js: OptionAnalyse,Analyse="+_Analyse+", _Option="+_Option+", _Value="+_Value);
    switch (_Analyse) {
        case "EXIST":
            // EXIST : if _Option include _Value, return true, else false
            for(var _i = 0; _i < _UnitOption.length; _i++ ) {
                if (_UnitOption[_i].toUpperCase().includes(_Value)) {
                    return true;
                }
            };
            return false;
            break;

        case "VALUE":
            // VALUE : if _Option separate by "," contains _Value, return the value after "=" 

            // Option Scan
            for(var _i = 0; _i < _UnitOption.length; _i++ ) {
                if (_UnitOption[_i].toUpperCase().includes(_Value)) {
                   var _UnitValue = _UnitOption[_i].split('=');
                   console.log("/main_include.js: OptionAnalyse: _UnitOption="+_UnitOption[_i]+": UnitValue="+_UnitValue[1]);
                   return _UnitValue[1];
               }
            }       
            return false;
            break;    

        default:
            return false;
            break;
    }
    
}