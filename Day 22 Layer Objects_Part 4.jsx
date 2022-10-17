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
        docRef.activeLayer = dupLayer;
        layerMask({
            docRef: docRef,
            layerParent: dupLayer,
            selectionFrom: "Mask",
            selectionType: SelectionType.REPLACE,
            selName: "Alpha 1",
            invert: false,
            feather: 1
        });
        ColoFillLayer({ type: "Layer", colorHEX: "ffffff", docRef: docRef, layerName: "white", parent: dupLayer });
        // var fillLayer = docRef.layerSets.getByName(setGrp.name).layers.getByName("white");

        docRef.activeLayer = dupLayer;
        
        /* getSelectionfromObj({
            docRef: docRef,
            layerParent: dupLayer,
            selectionFrom: "Layer",
            selectionType: SelectionType.REPLACE,
            selName: "dupLayer.name"
        }) */

        dropShadow({
        opacity : 30,
        distance : 15,
        spread : 20,
        blur : 80,
        name2 : "Linear",
        useGlobalAngle : false,
        shadowColor : "000000"
        });

    } catch (error) {
        alert(error + " - " + error.line);
    }
}


