// var filePath = File("C:\\Users\\Vijay\\Desktop\\Test\\Sample\\00038000263989_C1C1.JPG");
// var filePath = new File("/C/Users/Vijay/Desktop/Test/Sample/00038000263989_C1C1.JPG");
// $.writeln(filePath.length/1024/1024);
// var theFolder = new Folder("/C/Users/Vijay/Desktop/Test/Sample/");


// var _theFolder = Folder($.fileName).parent
// var theFolder = Folder(_theFolder + "/Sample");
// var txtFile = File(theFolder + "/Test.csv");
// if (!txtFile.exists) {
//     txtFile.open("a", undefined, undefined)
//     txtFile.writeln("FileName, Desc");
// } else {
//     txtFile.open("a", undefined, undefined)
//     txtFile.writeln("1111111.jpg,asdassadasdas");
// }
// // $.writeln(txtFile.exists);
// // if (txtFile.exists) txtFile.remove();

var _theFolder = Folder($.fileName).parent
var theFolder = Folder(_theFolder + "/Sample");
var theFiles = theFolder.getFiles("*.csv");
$.writeln(theFiles.length);
for (var i = 0; i < theFiles.length; i++){
    $.writeln(decodeURI(theFiles[i].name));
}

// $.writeln(txtFile.exists);
// if (txtFile.exists) txtFile.remove();



