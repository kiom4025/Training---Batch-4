//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO
var docRef = app.activeDocument;
var len = docRef.layers.length;
var BGND = docRef.layers[len - 1];

init();

function init() {
    var docRef = app.activeDocument;
    var len = docRef.layers.length;
    var BGND = docRef.layers[len - 1];
    if (!BGND.isBackgroundLayer) { alert("BGND layer was not found"); return; }
    // if (docRef.pathItems.length === 0) { alert("Path was not found"); return; }
    // try { docRef.pathItems.getByName("Path 1"); } catch (er) { alert("Path 1 was not found"); return; }
    try { var flg = docRef.selection; } catch (er) { alert(er + "Document doesn't have a selection\nPlease make a selection proceed further"); return; }

    // docRef.selection.makeWorkPath(1);
    // docRef.pathItems.getByName("Work Path").name = "Path 1";
    // docRef.pathItems.getByName("Path 1").makeClippingPath(0.2);
    // docRef.pathItems.getByName("Path 1").deselect();

    var cPath = getClippingPathIndex();
    $.writeln(docRef.pathItems[cPath].name);
    var flat = clippingFlatness();
    var pathflat = 0.2;
    $.writeln(flat);
    // if (flat !== pathflat && confirm("Do you want change " + docRef.pathItems[cPath].name + " flatness to " + pathflat + "?")) {
    //     docRef.pathItems[cPath].makeClippingPath(pathflat);
    // }
    deactivateClippingPath();


}