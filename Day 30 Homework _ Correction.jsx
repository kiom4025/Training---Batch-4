//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO;
var docRef = app.activeDocument;
var len = docRef.layers.length;
var docPath = docRef.path;
var fileName = docRef.name.replace(/\.[^\.]+$/, "");
var destFileSize = 100; // Value is in 'KB'

var filePath = new File(docPath + "/" + fileName + ".jpg");
// do {
//   if (filePath.exists) {
//     var actualFilesize = Math.ceil(filePath.length / 1000);
//     $.writeln(actualFilesize);
//     filePath.remove();
//     var setQuality = (100 * destFileSize) / actualFilesize;
//     $.writeln(setQuality);
//     exportFile("jpg", filePath, { quality: setQuality });
//   } else {
//     exportFile("jpg", filePath, { quality: 100 });
//   }
// } while (Math.ceil(filePath.length / 1000) !== destFileSize);
var getQulaity_100 = getFileSize(filePath, 100, fileName);
var getQulaity_75 = getFileSize(filePath, 75, fileName);
var getQulaity_50 = getFileSize(filePath, 50, fileName);
var getQulaity_25 = getFileSize(filePath, 25, fileName);

$.writeln(getQulaity_100 + "\n" + getQulaity_75 + "\n" + getQulaity_50 + "\n" + getQulaity_25 + "\n");


// do {
//   var actualFilesize = Math.ceil(filePath.length / 1000);
//   $.writeln(actualFilesize);
//   var setQuality = (100 * destFileSize) / actualFilesize;
//   $.writeln(setQuality);
//   exportFile("jpg", filePath, { quality: setQuality });

// } while (Math.ceil(filePath.length / 1000) <= destFileSize);


function getFileSize(filePath, Quality, fileName) {
  exportFile("jpg", filePath, { quality: Quality });
  var filePath = new File(docPath + "/" + fileName + ".jpg");
  var actualFilesize = Math.ceil(filePath.length / 1000);
  return actualFilesize;
}