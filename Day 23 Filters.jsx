//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO

var docRef = app.activeDocument;
var len = docRef.layers.length;
var BGND = docRef.layers[len - 1];

if (BGND.isBackgroundLayer) {
    docRef.activeLayer = docRef.backgroundLayer;
    // docRef.activeLayer = docRef.layers.getByName("ClipMask");
    // executeAction(stringIDToTypeID("collapseAllGroupsEvent"), (desc = new ActionDescriptor()), DialogModes.NO);
    // makeClippingMask();
    // docRef.layers[0].applyGaussianBlur(10);
    // app.runMenuItem(stringIDToTypeID("selectAllLayers"));
    // app.runMenuItem(stringIDToTypeID("tileVertically"));
}

