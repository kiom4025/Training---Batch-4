//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO

var docRef = app.activeDocument;
var len = docRef.layers.length;
var BGND = docRef.layers[len - 1];

if (BGND.isBackgroundLayer) {
    // docRef.activeLayer = docRef.backgroundLayer;
    // alert(docRef.activeLayer.kind)
    // AdjustmentLayer({ docRef: docRef, type: "Hue", Strt: -100 });

    // var curObj = {
    //     type: "Curve",
    //     channels: [
    //         { name: "Composite", SH: [0, 0], DM: [67, 52], LM: [189, 176], HL: [255, 255] },// MD: [128, 128],
    //         { name: "Red", SH: [0, 0], DM: [61, 38], LM: [190, 173], HL: [255, 255] },// MD: [128, 128],
    //         { name: "Green", SH: [0, 0], DM: [64, 36], LM: [200, 172], HL: [255, 255] },// MD: [128, 128],
    //         { name: "Blue", SH: [0, 0], DM: [67, 40], LM: [194, 174], HL: [255, 255] }// MD: [128, 128],
    //     ]
    // }
    // AdjustmentLayer({ docRef: docRef, type: "Curve", curveObj: curObj });

    // AdjustmentLayer({ docRef: docRef, type: "Brighten Contrast", bcObj: { useLegacy: true, brightness: 18, Cntr: 0 } });

    // var curveLayer = docRef.artLayers.add();    
    // curveLayer.kind = LayerKind.CURVES;
    // var curveLayer = docRef.layers.getByName("Curves 1");
    // curveLayer.adjustCurves([[0, 0], [67, 52], [189, 176], [255, 255]])

    // Monday need to be cross check
    // var curvesPoints =
    //     [
    //         [0, 0],
    //         [97, 153],
    //         [255, 255]
    //     ];

    // curveLayer.adjustCurves(curvesPoints);


    docRef.activeLayer = docRef.layers.getByName("Layer 1");
    executeAction(charIDToTypeID("CpFX"), undefined, DialogModes.NO);

    docRef.activeLayer = docRef.layers.getByName("Layer 2");
    (desc = new ActionDescriptor()).putBoolean(stringIDToTypeID("allowPasteFXOnLayerSet"), true);
    executeAction(charIDToTypeID("PaFX"), desc, DialogModes.NO);
}

