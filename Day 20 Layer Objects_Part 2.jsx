//@include "ScriptLib.jsx"
var docRef = app.activeDocument;
var len = docRef.layers.length;
var BGND = docRef.layers[len - 1];
if (BGND.isBackgroundLayer) {
    try {
        var setGrp = docRef.layerSets.add();
        setGrp.name = "Set 1";
        BGND.duplicate().name = "Layer 1";
        var dupLayer = docRef.layers.getByName("Layer 1");
        dupLayer.moveToEnd(setGrp);
        ColoFillLayer("ffffff");
        var fillLayer = docRef.layerSets.getByName(setGrp.name).layers.getByName("Color Fill 1");
        fillLayer.move(dupLayer, ElementPlacement.PLACEAFTER);
        layerMask({
            docRef: docRef,
            layerParent: dupLayer,
            selectionFrom: "None",
            selectionType: SelectionType.REPLACE,
            selName: "",
            invert: false,
            feather: 1
        });

    } catch (error) {
        alert(error + " - " + error.line);
    }
}


