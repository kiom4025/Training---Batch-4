//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO

var docRef = app.activeDocument;
var len = docRef.layers.length;
var BGND = docRef.layers[len - 1];

if (BGND.isBackgroundLayer) {
    docRef.activeLayer = docRef.layers[0];
    // executeAction(stringIDToTypeID("newPlacedLayer"), undefined, DialogModes.NO);
    // var replaceFile="C:\\Users\\Vijay\\Desktop\\Test\\Practice\\Sample"
    // var replaceFile = "~/Desktop/Test/Practice/Sample/Sample_00.jpg"
    // replaceSmartObjFile(replaceFile)
    // docRef.activeLayer.rasterize(RasterizeType.LINKEDLAYERS)
    var tmpName = docRef.activeLayer.name;
    docRef.activeLayer.merge();
    docRef.activeLayer.name = tmpName;
    // layerColor("blue");

}