//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO;
var docRef = app.activeDocument;
var len = docRef.layers.length;
var docPath = docRef.path;
var fileName = docRef.name.replace(/\.[^\.]+$/, "");
var destFileSize = 100; // Value is in 'KB'

var filePath = new File(docPath + "/" + fileName + ".jpg");
do {
  if (filePath.exists) {
    var actualFilesize = Math.ceil(filePath.length / 1024);
    $.writeln(actualFilesize);
    filePath.remove();
    var setQuality = Math.ceil((100 * destFileSize) / actualFilesize);
    $.writeln(setQuality);
    exportFile("jpg", filePath, { quality: setQuality });
  } else {
    exportFile("jpg", filePath, { quality: 100 });
  }
} while (Math.ceil(filePath.length / 1024) !== destFileSize);
