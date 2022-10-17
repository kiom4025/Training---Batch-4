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
        // getSelectionfromObj({
        //     docRef: docRef,
        //     layerParent: dupLayer,
        //     selectionFrom: "Layer",
        //     selectionType: SelectionType.REPLACE,
        //     selName: "dupLayer.name"
        // })
        // var shadow = setGrp.artLayers.add();
        // shadow.name = "Shadow";
        // shadow.move(dupLayer, ElementPlacement.PLACEAFTER)

        // var myColor = new SolidColor();
        // myColor.rgb.hexValue = "000000";

        // docRef.activeLayer = docRef.backgroundLayer;
        // docRef.selection.translate(100, 100);
        // docRef.selection.feather(50)
        // docRef.activeLayer = shadow;
        // docRef.selection.fill(myColor);
        // shadow.opacity = 30;

        var shadObj = {
            docRef: docRef,
            parentSet: setGrp,
            parentLayer: dupLayer,
            name: "Shadow",
            dx: 100,
            dy: 100,
            feather: 50,
            opacity: 30,
            selectionFrom: "Layer",
            selName: dupLayer.name
        }
        addShadowLayer(shadObj);
        var shadObj = {
            docRef: docRef,
            parentSet: setGrp,
            parentLayer: dupLayer,
            name: "touch Shadow",
            dx: 20,
            dy: 20,
            feather: 20,
            opacity: 30,
            selectionFrom: "Mask",
            selName: "Alpha 1",
            blendMode: BlendMode.MULTIPLY
        }
        addShadowLayer(shadObj);
        executeAction(charIDToTypeID("Mrg2"), (desc = new ActionDescriptor()), DialogModes.NO);


    } catch (error) {
        alert(error + " - " + error.line);
    }
}


