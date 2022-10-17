
/* 
Function to create a sub-folder with ".txt || .csv || .tsv" data file,
    within the Script's parent folder location.
*/
var errData = {
    fileName: "Temp Work.jpg",
    errorDesc:"1. Mask name was wrong 300\v2. Path name was wrong"
}

var errInfo = {
    subFolderName : "Sample",
    fileName : "ErroLog",
    _data: errData,
    format: ".csv",
    separator:","
}

createDataFile(errInfo);
 

function createDataFile (dataObj){
    var _theFolder = Folder($.fileName).parent
    var theFolder = Folder(_theFolder +"/"+ dataObj.subFolderName);

    if(!theFolder.exists) theFolder.create();

    var theFile = File(theFolder +"/"+ dataObj.fileName+ dataObj.format);
    
    if (!theFile.exists) {
        theFile.open("a", undefined, undefined);
        theFile.writeln("File Name, Error Description");
        theFile.writeln(dataObj._data.fileName+dataObj.separator+dataObj._data.errorDesc);
    }
    else{
        theFile.open("a", undefined, undefined);
        theFile.writeln(dataObj._data.fileName+dataObj.separator+dataObj._data.errorDesc);
    }
}