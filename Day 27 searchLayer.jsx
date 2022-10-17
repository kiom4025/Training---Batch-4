// @include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO;
var docRef = app.activeDocument;
var len = docRef.layers.length;
var BGND = docRef.layers[len - 1];

// $.writeln(docRef.activeLayer.typename);

init();

function init() {
  var docRef = app.activeDocument;
  var len = docRef.layers.length;
  origTopFolder = Folder("~/Desktop/Test/");
  var allLayersName = [];
  fileFolderArr = scanSubLayers(docRef, allLayersName);
  //   $.writeln(fileFolderArr);
}

function scanSubLayers(topParent, allArr) {
  var subFolders = [];
  var allLayers = [];
  var allLayersName = allArr;
  var allFolderName = [];
  subFolders = topParent.layers;

  for (var j = 0; j < subFolders.length; j++) {
    // loop through folders
    if (
      subFolders[j].typename === "LayerSet" &&
      subFolders[j].layers.length == 0
    ) {
      allFolderName.push(subFolders[j].name);
      continue;
    }
    if (subFolders[j].typename !== "LayerSet") {
      allLayersName.push(subFolders[j].name);
      //   $.writeln(allLayersName);
      continue;
    }
    var procFiles = subFolders[j].layers;
    for (var i = 0; i < procFiles.length; i++) {
      // loop through folder contents
      if (procFiles[i].typename !== "LayerSet") {
        allLayersName.push(procFiles[i].name);
        // $.writeln(allLayersName);
        // if no fileMask then collect all files
      } else if (procFiles[i].typename === "LayerSet") {
        var folderName = procFiles[i].toString();
        if (procFiles[i].typename === "LayerSet")
          allFolderName.push(folderName); // store the subfolder
        // allFolderName.push(folderName); // store the subfolder
        // $.writeln(folderName);
        scanSubLayers(procFiles[i], allLayersName); // search the subfolder
      }
    }
  }
  $.writeln("All Folder name : " + allFolderName);
  $.writeln("All Layer name : " + allLayersName);
  return [allLayersName, allFolderName];
}
