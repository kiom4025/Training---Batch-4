//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO

var docRef = app.activeDocument;
var len = docRef.layers.length;
var BGND = docRef.layers[len - 1];

//Monday need to be clarified. remove is not a function

if (BGND.isBackgroundLayer) {
    // alert(docRef.historyStates.length);
    // $.writeln(docRef.historyStates[50]);
    // docRef.historyStates.getByName(docRef.historyStates[docRef.historyStates.length - 1].name).remove();

    // docRef.historyStates[docRef.historyStates.length - 1].remove();

    // docRef.activeHistoryState = docRef.historyStates[docRef.historyStates.length - 1]

    // var descriptor = new ActionDescriptor();
    // var reference = new ActionReference();
    // var reference2 = new ActionReference();

    // //Select the History Brush on the Histyory state
    // reference.putProperty(c2t("HstS"), s2t("historyBrushSource"));
    // descriptor.putReference(c2t("null"), reference);
    // reference2.putProperty(c2t("HstS"), s2t("currentHistoryState"));
    // descriptor.putReference(s2t("to"), reference2);
    // executeAction(s2t("set"), descriptor, DialogModes.NO);

    // var descriptor = new ActionDescriptor();
    // var reference = new ActionReference();

    // //Select the History Brush
    // reference.putClass(s2t("historyBrushTool"));
    // descriptor.putReference(c2t("null"), reference);
    // executeAction(s2t("select"), descriptor, DialogModes.NO);

    snapshot("Test Snap");
}