//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO;
var docRef = app.activeDocument;
var len = docRef.layers.length;
var docPath = docRef.path;
var fileName = docRef.name.replace(/\.[^\.]+$/, "");
var imgComp = getLZWcompression();
/* if (imgComp !== "LZW") {
    saveFile("tif", undefined, { alphaChannels: false, imageCompression: "TIFFLZW", layerCompression: "ZIP", byteOrder: "IBM" }, false, Extension.LOWERCASE);
}
 */

$.writeln(imgComp);
