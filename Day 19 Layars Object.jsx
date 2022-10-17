//@include "ScriptLib.jsx"
var docRef = app.activeDocument;

//Dup document bewtween Two document;
// if (documents.length == 2) {
//     var docRef = app.activeDocument;
//     var destDoc = documents[1];
//     var sourceLayer = docRef.layers.getByName("Layer 3");
//     sourceLayer.duplicate(destDoc);
//     app.activeDocument = destDoc;
//     destDoc.activeLayer.name = "Dup";
//     app.activeDocument = docRef;

// } else {
//     alert("Need two document for duplicate layer");
// }




// var len = docRef.layers.length;
// $.writeln(len);
// var BGND = docRef.layers[len - 1];
// $.writeln(BGND + "\t" + BGND.isBackgroundLayer);


// if (BGND.isBackgroundLayer) {
//     try {
//         BGND.duplicate().name = "Dup Layer";
//         var dupLayer = docRef.layers.getByName("Dup Layer");
//         var destLayer = docRef.layers.getByName("Layer 33");
//         dupLayer.move(destLayer, ElementPlacement.PLACEAFTER);
//     } catch (error) {
//         alert(error + " - " + error.line);
//     }

// } else { $.writeln("No"); }

// try {
//     var sourceLayer = docRef.layers.getByName("Layer 2");
//     var destLayer = docRef.layers.getByName("Layer 5");
//     sourceLayer.duplicate(destLayer, ElementPlacement.PLACEBEFORE).name = "Dup Layer"
//     sourceLayer.move(destLayer, ElementPlacement.PLACEBEFORE);
// } catch (error) {
//     alert(error + " - " + error.line);
// }


try {
    var sourceLayer = docRef.layers.getByName("Layer 2");
    var destLayer = docRef.layers.getByName("Layer 55");
    sourceLayer.duplicate(destLayer, ElementPlacement.PLACEBEFORE).name = "Dup Layer"
    sourceLayer.move(destLayer, ElementPlacement.PLACEBEFORE);
} catch (er) {
    // $.writeln(er);
    // $.writeln(JSON.stringify(er));
    // $.writeln(er.number + "\n" + er.fileName + "\n" + er.name + "\n" + er.message + "\n" + er.line);
    alert(er + " - " + er.line);
}
