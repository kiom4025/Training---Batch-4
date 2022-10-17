//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO
var docRef = app.activeDocument;
var len = docRef.layers.length;
var docPath = docRef.path;
var fileName = (docRef.name).replace(/\.[^\.]+$/, '');
// var imgComp = getLZWcompression();
// var byteOrder = getTransparency_ByteOrder(File(app.activeDocument.fullName), "ByteOrder");
// var trans = getTransparency_ByteOrder(File(app.activeDocument.fullName), "Transparency");

// if (imgComp !== "LZW" || byteOrder !== "IBM" || !transparency) {
//     saveFile("tif", undefined, { alphaChannels: false, imageCompression: "TIFFLZW", layerCompression: "ZIP", byteOrder: byteOrder, transparency: transparency }, false, Extension.LOWERCASE);
// }


// alert(getJPGFormatOption(File(app.activeDocument.fullName), "JPEG_Quality"));
// alert(getJPGFormatOption(File(app.activeDocument.fullName), "JPEG_FormatOption"));
alert(getEPSencoding(File(app.activeDocument.fullName)));
