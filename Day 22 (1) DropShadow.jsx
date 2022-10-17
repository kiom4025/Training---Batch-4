//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO

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
        ColoFillLayer({ type: "Layer", colorHEX: "ffffff", docRef: docRef, layerName: "White", parent: dupLayer });
        // var fillLayer = docRef.layerSets.getByName(setGrp.name).layers.getByName("white");

        docRef.activeLayer = dupLayer;

        /* getSelectionfromObj({
            docRef: docRef,
            layerParent: dupLayer,
            selectionFrom: "Layer",
            selectionType: SelectionType.REPLACE,
            selName: "dupLayer.name"
        }) */

        // dropShadow({
        //     docRef: docRef,
        //     opacity: 30,
        //     distance: 15,
        //     spread: 20,
        //     blur: 80,
        //     layerParent: dupLayer,
        //     layerSetParent: setGrp,
        //     useGlobalAngle: false,
        //     shadowColor: "000000",
        //     createLayer: false,
        //     layerName: "Shadow"
        // });

        docRef.activeLayer = docRef.backgroundLayer;
        setGrp.visible = false;
        getSelectionfromObj({
            docRef: docRef,
            selectionFrom: "CompositeChannel",
            selectionType: SelectionType.REPLACE,
            invert: true
        });
        setGrp.visible = true;
        docRef.activeLayer = dupLayer;
        var fillLayer = ColoFillLayer({ type: "Fill", colorHEX: "000000", docRef: docRef, layerName: "Shadow", parent: dupLayer });
        fillLayer.move(dupLayer, ElementPlacement.PLACEAFTER);
        selectLayerMask();
        selecttheMask();
        levelsLayer();
        docRef.activeLayer = docRef.backgroundLayer;

        // LayerToggleOn_OFF(true);


    } catch (error) {
        alert(error + " - " + error.line);
    }
}


