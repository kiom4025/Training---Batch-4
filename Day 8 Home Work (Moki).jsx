
/* 
Function to create a sub-folder with ".txt || .csv || .tsv" data file,
    within the Script's parent folder location.
*/

var Obj01 = {
    Sub_Folder_Name : "/Sample",
    FileNAME : "/Test2.txt",
    _Data : "Title, Subject"
}


CreateDataFile(Obj01);


function CreateDataFile (OBJECT){
    var _theFolder = Folder($.fileName).parent
    var theFolder = Folder(_theFolder + OBJECT.Sub_Folder_Name);

    if(!theFolder.exists) theFolder.create();

    var txtFile = File(theFolder + OBJECT.FileNAME);
    
    if (!txtFile.exists) {
        txtFile.open("a", undefined, undefined);
        txtFile.writeln(OBJECT._Data);
    }

    else{
        txtFile.open("a", undefined, undefined);
        txtFile.writeln(OBJECT._Data);
    }
}