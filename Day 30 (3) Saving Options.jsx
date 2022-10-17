//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO
var docRef = app.activeDocument;
var len = docRef.layers.length;
var docPath = docRef.path;
var fileName = (docRef.name).replace(/\.[^\.]+$/, '');


var filePath = new File(docPath + "/" + fileName + ".jpg")


// saveFile("tif", undefined, { alphaChannels: false, imageCompression: "TIFFLZW", layerCompression: "ZIP", byteOrder: "IBM" }, false, Extension.UPPERCASE)
// saveFile("psd", undefined, { alphaChannels: false, layers: false }, false, Extension.UPPERCASE)
// saveFile("png", undefined, { compression: 9, interlaced: true }, false, Extension.LOWERCASE)
// saveFile("jpg", undefined, { quality: 10 }, false, Extension.LOWERCASE)
// saveFile("eps", undefined, { preview: "EIGHTBITTIFF", encoding: "BINARY" }, false, Extension.LOWERCASE)
exportFile("jpg", filePath, { quality: 100 });
// exportFile("png", String(filePath).replace(".jpg", ".png"), { interlaced: true });



