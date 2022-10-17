var c2t = function (s) { return app.charIDToTypeID(s); };
var s2t = function (s) { return app.stringIDToTypeID(s); };

var cTID = function (s) { return app.charIDToTypeID(s); };
var sTID = function (s) { return app.stringIDToTypeID(s); };

var descriptor = new ActionDescriptor();
var descriptor2 = new ActionDescriptor();
var descriptor3 = new ActionDescriptor();
var descriptor4 = new ActionDescriptor();
var descriptor5 = new ActionDescriptor();
var descriptor6 = new ActionDescriptor();
var descriptor7 = new ActionDescriptor();
var descriptor8 = new ActionDescriptor();
var descriptor9 = new ActionDescriptor();
var descriptor10 = new ActionDescriptor();
var descriptor11 = new ActionDescriptor();
var descriptor12 = new ActionDescriptor();
var descriptor13 = new ActionDescriptor();
var descriptor14 = new ActionDescriptor();
var descriptor15 = new ActionDescriptor();
var descriptor16 = new ActionDescriptor();
var descriptor17 = new ActionDescriptor();
var descriptor18 = new ActionDescriptor();
var descriptor19 = new ActionDescriptor();
var descriptor20 = new ActionDescriptor();
var descriptor21 = new ActionDescriptor();
var descriptor22 = new ActionDescriptor();
var descriptor23 = new ActionDescriptor();
var descriptor24 = new ActionDescriptor();
var descriptor25 = new ActionDescriptor();
var list = new ActionList();
var list2 = new ActionList();
var list3 = new ActionList();
var list4 = new ActionList();
var list5 = new ActionList();
var reference = new ActionReference();
var reference2 = new ActionReference();
var reference3 = new ActionReference();
var reference4 = new ActionReference();
var reference5 = new ActionReference();
var reference6 = new ActionReference();




function Crop(cropObj) {
    (desc02 = new ActionDescriptor()).putUnitDouble(charIDToTypeID("Top "), charIDToTypeID("#Pxl"), cropObj.top);
    desc02.putUnitDouble(charIDToTypeID("Left"), charIDToTypeID("#Pxl"), cropObj.left);
    desc02.putUnitDouble(charIDToTypeID("Btom"), charIDToTypeID("#Pxl"), cropObj.bottom);
    desc02.putUnitDouble(charIDToTypeID("Rght"), charIDToTypeID("#Pxl"), cropObj.right);
    (desc01 = new ActionDescriptor()).putObject(charIDToTypeID("T   "), charIDToTypeID("Rctn"), desc02);
    desc01.putUnitDouble(charIDToTypeID("Angl"), charIDToTypeID("#Ang"), 0.000000);
    desc01.putBoolean(charIDToTypeID("Dlt "), cropObj.delPixel);
    desc01.putEnumerated(stringIDToTypeID("cropAspectRatioModeKey"), stringIDToTypeID("cropAspectRatioModeClass"), stringIDToTypeID("targetSize"));
    if (cropObj.width !== undefined && cropObj.height !== undefined) {
        desc01.putUnitDouble(charIDToTypeID("Wdth"), charIDToTypeID("#Pxl"), cropObj.width);
        desc01.putUnitDouble(charIDToTypeID("Hght"), charIDToTypeID("#Pxl"), cropObj.height);
        desc01.putUnitDouble(charIDToTypeID("Rslt"), charIDToTypeID("#Rsl"), cropObj.resolution);
    }
    executeAction(charIDToTypeID("Crop"), desc01, DialogModes.NO);
}

//@include "json3.js"
function hasSelection(docRef) {
    try {
        docRef.selection.bounds;
        return true;
    } catch (er) { return false; }
}

function setCanvas(flgCropOBJ, maxStatus) {
    if (maxStatus == "" || maxStatus == undefined) maxStatus = "";

    //alert(flgCropOBJ.imageCropStatus);
    switch (flgCropOBJ.imageCropStatus) {
        case "Left"://Done                    
            // app.activeDocument.resizeCanvas(undefined, flgCropOBJ.height, AnchorPosition.MIDDLECENTER);
            // app.activeDocument.resizeCanvas(flgCropOBJ.width, undefined, AnchorPosition.MIDDLELEFT);
            activeDocument.resizeCanvas((activeDocument.width + flgCropOBJ.padding.left), (app.activeDocument.height + flgCropOBJ.padding.bottom), AnchorPosition.TOPRIGHT);
            app.activeDocument.resizeCanvas((app.activeDocument.width + flgCropOBJ.padding.right), (app.activeDocument.height + flgCropOBJ.padding.top), AnchorPosition.BOTTOMLEFT);
            // resizes image to match the padding object width and height
            app.activeDocument.resizeCanvas(null, flgCropOBJ.height, flgCropOBJ.anchors.vertical);
            app.activeDocument.resizeCanvas(flgCropOBJ.width, null, AnchorPosition.MIDDLELEFT);
            break;
        case "Left Top"://Done                                    
            app.activeDocument.resizeCanvas(undefined, flgCropOBJ.height, AnchorPosition.TOPCENTER);
            app.activeDocument.resizeCanvas(flgCropOBJ.width, undefined, AnchorPosition.MIDDLELEFT);
            break;
        case "Left Right"://Done                                 
            app.activeDocument.resizeCanvas(undefined, flgCropOBJ.width, AnchorPosition.MIDDLECENTER);
            break;
        case "Left Bottom"://Done                
            app.activeDocument.resizeCanvas(undefined, flgCropOBJ.height, AnchorPosition.BOTTOMCENTER);
            app.activeDocument.resizeCanvas(flgCropOBJ.width, undefined, AnchorPosition.MIDDLELEFT);
            break;
        case "Left Top Right"://Done              
            app.activeDocument.resizeImage(flgCropOBJ.width, undefined, flgCropOBJ.resolution, ResampleMethod.BICUBICSHARPER);
            app.activeDocument.resizeCanvas(undefined, flgCropOBJ.height, AnchorPosition.TOPCENTER);
            break;
        case "Left Top Right Bottom"://Done
            if (maxStatus == "flgWidth")
                app.activeDocument.resizeImage(flgCropOBJ.width, undefined, flgCropOBJ.resolution, ResampleMethod.BICUBICSHARPER);
            else
                app.activeDocument.resizeImage(undefined, flgCropOBJ.height, flgCropOBJ.resolution, ResampleMethod.BICUBICSHARPER);
            break;
        case "Top"://Done               
            app.activeDocument.resizeCanvas(undefined, flgCropOBJ.height, AnchorPosition.TOPCENTER);
            app.activeDocument.resizeCanvas(flgCropOBJ.width, undefined, AnchorPosition.MIDDLECENTER);
            break;
        case "Top Right"://Done                
            app.activeDocument.resizeCanvas(undefined, flgCropOBJ.height, AnchorPosition.TOPCENTER);
            app.activeDocument.resizeCanvas(flgCropOBJ.width, undefined, AnchorPosition.MIDDLERIGHT);
            break;
        case "Top Bottom"://Done                
            app.activeDocument.resizeCanvas(flgCropOBJ.width, undefined, AnchorPosition.MIDDLECENTER);
            break;
        case "Top Right Bottom"://Done                                                    
            app.activeDocument.resizeImage(undefined, flgCropOBJ.height, flgCropOBJ.resolution, ResampleMethod.BICUBICSHARPER);
            app.activeDocument.resizeCanvas(flgCropOBJ.width, undefined, AnchorPosition.MIDDLERIGHT);
            break;
        case "Right"://Done
            app.activeDocument.resizeCanvas(undefined, flgCropOBJ.height, AnchorPosition.MIDDLECENTER);
            app.activeDocument.resizeCanvas(flgCropOBJ.width, undefined, AnchorPosition.MIDDLERIGHT);
            break;
        case "Right Bottom"://Done                                 
            app.activeDocument.resizeCanvas(undefined, flgCropOBJ.height, AnchorPosition.BOTTOMCENTER);
            app.activeDocument.resizeCanvas(flgCropOBJ.width, undefined, AnchorPosition.MIDDLERIGHT);
            break;
        case "Right Bottom Left"://Done                
            app.activeDocument.resizeImage(flgCropOBJ.width, undefined, flgCropOBJ.resolution, ResampleMethod.BICUBICSHARPER);
            app.activeDocument.resizeCanvas(undefined, flgCropOBJ.height, AnchorPosition.BOTTOMCENTER);
            break;
        case "Bottom"://Done                
            app.activeDocument.resizeCanvas(flgCropOBJ.width, undefined, AnchorPosition.MIDDLECENTER);
            app.activeDocument.resizeCanvas(undefined, flgCropOBJ.height, AnchorPosition.BOTTOMCENTER);
            break;
        case "Bottom Left Top"://Done                                  
            app.activeDocument.resizeImage(undefined, flgCropOBJ.height, flgCropOBJ.resolution, ResampleMethod.BICUBICSHARPER);
            app.activeDocument.resizeCanvas(flgCropOBJ.width, undefined, AnchorPosition.MIDDLELEFT);
            break;
    }
};

function readJSON(jsonfile) {
    if (!jsonfile.exists) { alert("No JSON file was found"); return; }
    jsonfile.open('r');
    var data = jsonfile.read();
    jsonfile.close();
    return JSON.parse(data);
}



/**   
   * @description To Create a Solid or ColorFill layer based inputs below
   * @param  {object}  { type:string,colorHEX: string, docRef:document,layerName:string, opacity:number, blendMode:[object],parent:[layer object] }     
   * @returns {void}
*/

function ColoFillLayer(fillObJ) {//type, colorHEX
    var sc = new SolidColor();
    sc.rgb.hexValue = fillObJ.colorHEX;
    if (fillObJ.type === "Fill") {
        (ref01 = new ActionReference()).putClass(stringIDToTypeID("contentLayer"));
        (desc01 = new ActionDescriptor()).putReference(charIDToTypeID("null"), ref01);
        (desc04 = new ActionDescriptor()).putDouble(charIDToTypeID("Rd  "), sc.rgb.red);
        desc04.putDouble(charIDToTypeID("Grn "), sc.rgb.green);
        desc04.putDouble(charIDToTypeID("Bl  "), sc.rgb.blue);
        (desc03 = new ActionDescriptor()).putObject(charIDToTypeID("Clr "), charIDToTypeID("RGBC"), desc04);
        var idsolidColorLayer = stringIDToTypeID("solidColorLayer");
        (desc02 = new ActionDescriptor()).putObject(charIDToTypeID("Type"), idsolidColorLayer, desc03);
        desc01.putObject(charIDToTypeID("Usng"), stringIDToTypeID("contentLayer"), desc02);
        executeAction(charIDToTypeID("Mk  "), desc01, DialogModes.NO);
    } else if (fillObJ.type === "Layer") {
        var whiteLayer = fillObJ.docRef.artLayers.add();
        whiteLayer.name = fillObJ.layerName;
        whiteLayer.opacity = (fillObJ.opacity !== undefined) ? fillObJ.opacity : 100;
        whiteLayer.blendMode = (fillObJ.blendMode !== undefined) ? fillObJ.blendMode : BlendMode.NORMAL;
        whiteLayer.move(fillObJ.parent, ElementPlacement.PLACEAFTER);
        fillObJ.docRef.selection.selectAll();
        docRef.selection.fill(sc);
        fillObJ.docRef.selection.deselect();
    }
    fillObJ.docRef.activeLayer.name = fillObJ.layerName;
    return fillObJ.docRef.activeLayer;

}

function layerMoveByID(layerObj) {

    var desc = new ActionDescriptor();
    var ref0 = new ActionReference();
    var ref1 = new ActionReference();
    // select the target moveTo layer and get its Photoshop index
    PS.Layers.getById(layerObj.moveToId);
    // Photoshop layerSets have a 'hidden' index value which marks the end of the group
    var moveToIndex = app.activeDocument.activeLayer.itemIndex - 1;

    try {
        ref0.putIdentifier(app.charIDToTypeID("Lyr "), layerObj.moveLayerId);
        desc.putReference(app.charIDToTypeID("null"), ref0);
        ref1.putIndex(app.charIDToTypeID("Lyr "), moveToIndex);
        desc.putReference(app.charIDToTypeID("T   "), ref1);
        desc.putBoolean(app.charIDToTypeID("Adjs"), false);
        app.executeAction(app.charIDToTypeID("move"), desc, DialogModes.NO);
    } catch (err) {
        return (err + " (Cannot move by Photoshop layer ID)");
    }
}

function layerMask(layerObj) {
    var actChan = layerObj.docRef.activeChannels;
    layerObj.docRef.activeLayer = layerObj.layerParent;
    getSelectionfromObj(layerObj)
    if (layerObj.invert) layerObj.docRef.selection.invert();
    // Apply LayerMask
    applyLayerMask();
    layerObj.docRef.activeChannels = actChan;
}

function getSelectionfromObj(selObj) {
    var actChan = selObj.docRef.activeChannels;
    switch (selObj.selectionFrom) {
        case "Mask":
            var selMask = selObj.docRef.channels.getByName(selObj.selName);
            selObj.docRef.selection.load(selMask, selObj.selectionType);
            break;
        case "Path":
            var selPath = selObj.docRef.pathItems.getByName(selObj.selName);
            feather = (selObj.feather !== undefined) ? selObj.feather : 0.3
            selPath.makeSelection(feather, true, selObj.selectionType);
            break;
        case "None":
            selObj.docRef.selection.selectAll();
            feather = (selObj.feather !== undefined) ? selObj.feather : 0.3
            selObj.docRef.selection.feather(feather);
            break;
        case "Layer":
            selObj.docRef.activeLayer = selObj.layerParent;
            if (hasLayerMask()) selectionFromLayerMask();
            else selectionfromLayer();
            break;
        case "CompositeChannel":
            try { selObj.docRef.selection.deselect(); } catch (er) { }
            getselectionFromCompositeCHN()
            if (selObj.invert) selObj.docRef.selection.invert();
            break;
    }
    selObj.docRef.activeChannels = actChan;
}

function hasLayerMask() {
    var hasLayerMask = false;
    try {
        var ref = new ActionReference();
        var keyUserMaskEnabled = cTID('UsrM');
        ref.putProperty(cTID('Prpr'), keyUserMaskEnabled);
        ref.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        var desc = executeActionGet(ref);
        if (desc.hasKey(keyUserMaskEnabled)) { hasLayerMask = true; }
    }
    catch (e) { $.writeln(e); }
    return hasLayerMask;
}

function selectLayerMask() {
    (reference = new ActionReference()).putEnumerated(s2t("channel"), s2t("channel"), s2t("mask"));
    (descriptor = new ActionDescriptor()).putReference(c2t("null"), reference);
    descriptor.putBoolean(s2t("makeVisible"), true);
    executeAction(s2t("select"), descriptor, DialogModes.NO);
}

function selecttheMask() {
    (ref04 = new ActionReference()).putEnumerated(charIDToTypeID("Chnl"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    (list02 = new ActionList()).putReference(ref04);
    (desc02 = new ActionDescriptor()).putList(charIDToTypeID("null"), list02);
    executeAction(charIDToTypeID("Shw "), desc02, DialogModes.NO);

    (ref01 = new ActionReference()).putEnumerated(charIDToTypeID("Chnl"), charIDToTypeID("Chnl"), charIDToTypeID("Rd  "));
    (list01 = new ActionList()).putReference(ref01);
    (ref02 = new ActionReference()).putEnumerated(charIDToTypeID("Chnl"), charIDToTypeID("Chnl"), charIDToTypeID("Grn "));
    list01.putReference(ref02);
    (ref03 = new ActionReference()).putEnumerated(charIDToTypeID("Chnl"), charIDToTypeID("Chnl"), charIDToTypeID("Bl  "));
    list01.putReference(ref03);
    (desc01 = new ActionDescriptor()).putList(charIDToTypeID("null"), list01);
    executeAction(charIDToTypeID("Hd  "), desc01, DialogModes.NO);
}


function selectionfromLayer() {
    (reference = new ActionReference()).putProperty(s2t("channel"), s2t("selection"));
    (descriptor = new ActionDescriptor()).putReference(c2t("null"), reference);
    (reference2 = new ActionReference()).putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
    descriptor.putReference(s2t("to"), reference2);
    executeAction(s2t("set"), descriptor, DialogModes.NO);
}

function selectionFromLayerMask() {
    selectLayerMask();
    (reference = new ActionReference()).putProperty(s2t("channel"), s2t("selection"));
    (descriptor = new ActionDescriptor()).putReference(c2t("null"), reference);
    (reference2 = new ActionReference()).putEnumerated(s2t("channel"), s2t("ordinal"), s2t("targetEnum"));
    descriptor.putReference(s2t("to"), reference2);
    executeAction(s2t("set"), descriptor, DialogModes.NO);
}


function applyVectorMask() {
    (reference = new ActionReference()).putClass(s2t("path"));
    (descriptor = new ActionDescriptor()).putReference(c2t("null"), reference);
    (reference2 = new ActionReference()).putEnumerated(s2t("path"), s2t("path"), s2t("vectorMask"));
    descriptor.putReference(s2t("at"), reference2);
    (reference3 = new ActionReference()).putEnumerated(s2t("path"), s2t("ordinal"), s2t("targetEnum"));
    descriptor.putReference(s2t("using"), reference3);
    executeAction(s2t("make"), descriptor, DialogModes.NO);
}

function applyLayerMask() {
    (desc01 = new ActionDescriptor()).putClass(charIDToTypeID("Nw  "), charIDToTypeID("Chnl"));
    (ref01 = new ActionReference()).putEnumerated(charIDToTypeID("Chnl"), charIDToTypeID("Chnl"), charIDToTypeID("Msk "));
    desc01.putReference(charIDToTypeID("At  "), ref01);
    desc01.putEnumerated(charIDToTypeID("Usng"), charIDToTypeID("UsrM"), charIDToTypeID("RvlS"));
    executeAction(charIDToTypeID("Mk  "), desc01, DialogModes.NO);
}

function hasVectorMask() {
    var hasVectorMask = false;
    try {
        exitref = new ActionReference();
        exitdesc = new ActionDescriptor();
        exitref.putEnumerated(cTID("Path"), cTID("Path"), sTID("vectorMask"));
        exitref.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        exitdesc = app.executeActionGet(exitref);
        exitdesc.putReference(cTID("null"), exitref);
        app.executeAction(cTID("slct"), exitdesc, DialogModes.NO);
        hasVectorMask = true;
    }
    catch (e) { $.writeln(e); }
    return hasVectorMask;
}



function addShadowLayer(shadObj) {

    var shadow = shadObj.parentSet.artLayers.add();
    shadow.name = shadObj.name//"Shadow";
    shadow.move(shadObj.parentLayer, ElementPlacement.PLACEAFTER)

    var myColor = new SolidColor();
    myColor.rgb.hexValue = "000000";


    getSelectionfromObj({
        docRef: docRef,
        layerParent: dupLayer,
        selectionFrom: shadObj.selectionFrom,
        selectionType: SelectionType.REPLACE,
        selName: shadObj.selName
    })
    shadObj.docRef.activeLayer = shadObj.docRef.backgroundLayer;
    shadObj.docRef.selection.translate(shadObj.dx, shadObj.dy);//
    shadObj.docRef.selection.feather(shadObj.feather)//50
    shadObj.docRef.activeLayer = shadow;



    shadObj.docRef.selection.fill(myColor);
    shadow.opacity = shadObj.opacity;
    shadow.blendMode = (shadObj.blendMode == undefined) ? BlendMode.NORMAL : BlendMode.MULTIPLY
    shadObj.docRef.selection.deselect();

}




function dropShadow(shadowObj) {
    // set(, true, true, true, 0, 0, 0, 30, false, 120, 15, 15, 80, 0, false, "Linear", true);
    // function set(scale, enabled, present, showInDialog, red, Grn, blue, opacity, useGlobalAngle, localLightingAngle, distance, chokeMatte, blur, noise, AntA, name2, layerConceals) {
    // opacity,distance,blur,name2,useGlobalAngle,shadowColor

    var myColor = new SolidColor();
    myColor.rgb.hexValue = shadowObj.shadowColor;

    (reference = new ActionReference()).putProperty(s2t("property"), s2t("layerEffects"));
    reference.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    (descriptor = new ActionDescriptor()).putReference(c2t("null"), reference);
    (descriptor2 = new ActionDescriptor()).putUnitDouble(s2t("scale"), s2t("percentUnit"), 333.333333);
    (descriptor3 = new ActionDescriptor()).putBoolean(s2t("enabled"), true);
    descriptor3.putBoolean(s2t("present"), true); //present
    descriptor3.putBoolean(s2t("showInDialog"), true); //showInDialog
    descriptor3.putEnumerated(s2t("mode"), s2t("blendMode"), s2t("multiply"));
    (descriptor4 = new ActionDescriptor()).putDouble(s2t("red"), myColor.rgb.red);
    descriptor4.putDouble(c2t("Grn "), myColor.rgb.green);
    descriptor4.putDouble(s2t("blue"), myColor.rgb.blue);
    descriptor3.putObject(s2t("color"), s2t("RGBColor"), descriptor4);
    descriptor3.putUnitDouble(s2t("opacity"), s2t("percentUnit"), shadowObj.opacity);
    descriptor3.putBoolean(s2t("useGlobalAngle"), shadowObj.useGlobalAngle);
    descriptor3.putUnitDouble(s2t("localLightingAngle"), s2t("angleUnit"), 120); //localLightingAngle
    descriptor3.putUnitDouble(s2t("distance"), s2t("pixelsUnit"), shadowObj.distance);
    descriptor3.putUnitDouble(s2t("chokeMatte"), s2t("pixelsUnit"), shadowObj.spread); //spread = chokeMatte
    descriptor3.putUnitDouble(s2t("blur"), s2t("pixelsUnit"), shadowObj.blur); // blur = size
    descriptor3.putUnitDouble(s2t("noise"), s2t("percentUnit"), 0); //noise
    descriptor3.putBoolean(c2t("AntA"), false); //AntA
    (descriptor5 = new ActionDescriptor()).putString(s2t("name"), "Linear");
    descriptor3.putObject(c2t("TrnS"), c2t("ShpC"), descriptor5);
    descriptor3.putBoolean(s2t("layerConceals"), true); // layerConceals
    descriptor2.putObject(s2t("dropShadow"), s2t("dropShadow"), descriptor3);
    descriptor.putObject(s2t("to"), s2t("layerEffects"), descriptor2);
    executeAction(s2t("set"), descriptor, DialogModes.NO);

    if (shadowObj.createLayer) {
        createLayer();
        shadowObj.docRef.layerSets.getByName(shadowObj.layerSetParent.name).layers.getByName(shadowObj.layerParent.name + "'s Drop Shadow").name = shadowObj.layerName;
    }

}


function createLayer() {
    (reference = new ActionReference()).putClass(s2t("layer"));
    (descriptor = new ActionDescriptor()).putReference(c2t("null"), reference);
    (reference2 = new ActionReference()).putProperty(s2t("property"), s2t("layerEffects"));
    reference2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    descriptor.putReference(s2t("using"), reference2);
    executeAction(s2t("make"), descriptor, DialogModes.NO);
}

function LayerToggleOn_OFF(toggle) {
    (reference = new ActionReference()).putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    (list = new ActionList()).putReference(reference);
    (descriptor = new ActionDescriptor()).putList(c2t("null"), list);
    descriptor.putBoolean(c2t("TglO"), toggle);
    executeAction(s2t("show"), descriptor, DialogModes.NO);
}


function getselectionFromCompositeCHN() {
    (reference = new ActionReference()).putProperty(s2t("channel"), s2t("selection"));
    (descriptor = new ActionDescriptor()).putReference(c2t("null"), reference);
    (reference2 = new ActionReference()).putEnumerated(s2t("channel"), s2t("channel"), s2t("RGB"));
    descriptor.putReference(s2t("to"), reference2);
    executeAction(s2t("set"), descriptor, DialogModes.NO);
}

function levelsLayer() {
    var idLvls = charIDToTypeID("Lvls");
    var desc1179 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID("presetKind");
    var idpresetKindType = stringIDToTypeID("presetKindType");
    var idpresetKindCustom = stringIDToTypeID("presetKindCustom");
    desc1179.putEnumerated(idpresetKind, idpresetKindType, idpresetKindCustom);
    var idAdjs = charIDToTypeID("Adjs");
    var list118 = new ActionList();
    var desc1180 = new ActionDescriptor();
    var idChnl = charIDToTypeID("Chnl");
    var ref231 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref231.putEnumerated(idChnl, idOrdn, idTrgt);
    desc1180.putReference(idChnl, ref231);
    var idInpt = charIDToTypeID("Inpt");
    var list119 = new ActionList();
    list119.putInteger(83);
    list119.putInteger(205);
    desc1180.putList(idInpt, list119);
    var idLvlA = charIDToTypeID("LvlA");
    list118.putObject(idLvlA, desc1180);
    desc1179.putList(idAdjs, list118);
    executeAction(idLvls, desc1179, DialogModes.ALL);
}

function GlaussianBlur(blurValue) {
    var idGsnB = charIDToTypeID("GsnB");
    var desc1262 = new ActionDescriptor();
    var idRds = charIDToTypeID("Rds ");
    var idPxl = charIDToTypeID("#Pxl");
    desc1262.putUnitDouble(idRds, idPxl, blurValue);
    executeAction(idGsnB, desc1262, DialogModes.NO);
}

function makeClippingMask() {
    (reference = new ActionReference()).putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    (descriptor = new ActionDescriptor()).putReference(c2t("null"), reference);
    executeAction(s2t("groupEvent"), descriptor, DialogModes.NO);
}

function AdjustmentLayer(adjObj) {
    switch (adjObj.type) {
        case "Hue":
            HueSaturation(adjObj);
            if (adjObj.name !== undefined) adjObj.docRef.activeLayer.name = adjObj.name;
            break;

        case "Curve":
            Curve(adjObj.curveObj)
            if (adjObj.name !== undefined) adjObj.docRef.activeLayer.name = adjObj.name;
            break;

        case "Brighten Contrast":
            brighten_Contrast(adjObj.bcObj)
            if (adjObj.name !== undefined) adjObj.docRef.activeLayer.name = adjObj.name;
            break;
    }


}

//colorize, hue, Strt, lightness
function HueSaturation(hueObj) {

    lightness = (hueObj.lightness !== undefined) ? hueObj.lightness : 0
    hue = (hueObj.hue !== undefined) ? hueObj.hue : 0
    colorize = (hueObj.colorize !== undefined) ? hueObj.colorize : false
    Strt = (hueObj.Strt !== undefined) ? hueObj.Strt : 0

    var descriptor = new ActionDescriptor();
    var descriptor2 = new ActionDescriptor();
    var descriptor3 = new ActionDescriptor();
    var descriptor4 = new ActionDescriptor();
    var descriptor5 = new ActionDescriptor();
    var descriptor6 = new ActionDescriptor();
    var list = new ActionList();
    var reference = new ActionReference();
    var reference2 = new ActionReference();

    reference.putClass(s2t("adjustmentLayer"));
    descriptor.putReference(c2t("null"), reference);
    descriptor3.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindDefault"));
    descriptor3.putBoolean(s2t("colorize"), colorize);
    descriptor2.putObject(s2t("type"), s2t("hueSaturation"), descriptor3);
    descriptor.putObject(s2t("using"), s2t("adjustmentLayer"), descriptor2);
    executeAction(s2t("make"), descriptor, DialogModes.NO);
    reference2.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
    descriptor4.putReference(c2t("null"), reference2);
    descriptor5.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
    descriptor6.putInteger(s2t("hue"), hue);
    descriptor6.putInteger(c2t("Strt"), Strt);
    descriptor6.putInteger(s2t("lightness"), lightness);
    list.putObject(s2t("hueSatAdjustmentV2"), descriptor6);
    descriptor5.putList(s2t("adjustment"), list);
    descriptor4.putObject(s2t("to"), s2t("hueSaturation"), descriptor5);
    executeAction(s2t("set"), descriptor4, DialogModes.NO);
}



function Curve(curObj) {
    //make(0, 0, 67, 52, 189, 176, 255, 255, 0, 0, 61, 38, 190, 173, 255, 255, 0, 0, 64, 36, 200, 172, 255, 255, 0, 0, 67, 40, 194, 174, 255, 255);


    reference2.putClass(s2t("adjustmentLayer"));
    descriptor.putReference(c2t("null"), reference2);
    descriptor3.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindDefault"));
    descriptor2.putObject(s2t("type"), s2t("curves"), descriptor3);
    descriptor.putObject(s2t("using"), s2t("adjustmentLayer"), descriptor2);
    executeAction(s2t("make"), descriptor, DialogModes.NO);

    reference3.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
    descriptor4.putReference(c2t("null"), reference3);
    descriptor5.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));

    reference4.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
    descriptor6.putReference(s2t("channel"), reference4);
    descriptor7.putDouble(s2t("horizontal"), curObj.channels[0].SH[0]);
    descriptor7.putDouble(s2t("vertical"), curObj.channels[0].SH[1]);
    list2.putObject(c2t("Pnt "), descriptor7);
    descriptor8.putDouble(s2t("horizontal"), curObj.channels[0].DM[0]);
    descriptor8.putDouble(s2t("vertical"), curObj.channels[0].DM[1]);
    list2.putObject(c2t("Pnt "), descriptor8);
    descriptor9.putDouble(s2t("horizontal"), curObj.channels[0].LM[0]);
    descriptor9.putDouble(s2t("vertical"), curObj.channels[0].LM[1]);
    list2.putObject(c2t("Pnt "), descriptor9);
    descriptor10.putDouble(s2t("horizontal"), curObj.channels[0].HL[0]);
    descriptor10.putDouble(s2t("vertical"), curObj.channels[0].HL[1]);
    list2.putObject(c2t("Pnt "), descriptor10);
    descriptor6.putList(s2t("curve"), list2);
    list.putObject(s2t("curvesAdjustment"), descriptor6);

    reference5.putEnumerated(s2t("channel"), s2t("channel"), s2t("red"));
    descriptor11.putReference(s2t("channel"), reference5);
    descriptor12.putDouble(s2t("horizontal"), curObj.channels[1].SH[0]);
    descriptor12.putDouble(s2t("vertical"), curObj.channels[1].SH[1]);
    list3.putObject(c2t("Pnt "), descriptor12);
    descriptor13.putDouble(s2t("horizontal"), curObj.channels[1].DM[0]);
    descriptor13.putDouble(s2t("vertical"), curObj.channels[1].DM[1]);
    list3.putObject(c2t("Pnt "), descriptor13);
    descriptor14.putDouble(s2t("horizontal"), curObj.channels[1].LM[0]);
    descriptor14.putDouble(s2t("vertical"), curObj.channels[1].LM[1]);
    list3.putObject(c2t("Pnt "), descriptor14);
    descriptor15.putDouble(s2t("horizontal"), curObj.channels[1].HL[0]);
    descriptor15.putDouble(s2t("vertical"), curObj.channels[1].HL[1]);
    list3.putObject(c2t("Pnt "), descriptor15);
    descriptor11.putList(s2t("curve"), list3);
    list.putObject(s2t("curvesAdjustment"), descriptor11);

    reference6.putEnumerated(s2t("channel"), s2t("channel"), c2t("Grn "));
    descriptor16.putReference(s2t("channel"), reference6);
    descriptor17.putDouble(s2t("horizontal"), curObj.channels[2].SH[0]);
    descriptor17.putDouble(s2t("vertical"), curObj.channels[2].SH[1]);
    list4.putObject(c2t("Pnt "), descriptor17);
    descriptor18.putDouble(s2t("horizontal"), curObj.channels[2].DM[0]);
    descriptor18.putDouble(s2t("vertical"), curObj.channels[2].DM[1]);
    list4.putObject(c2t("Pnt "), descriptor18);
    descriptor19.putDouble(s2t("horizontal"), curObj.channels[2].LM[0]);
    descriptor19.putDouble(s2t("vertical"), curObj.channels[2].LM[1]);
    list4.putObject(c2t("Pnt "), descriptor19);
    descriptor20.putDouble(s2t("horizontal"), curObj.channels[2].HL[0]);
    descriptor20.putDouble(s2t("vertical"), curObj.channels[2].HL[1]);
    list4.putObject(c2t("Pnt "), descriptor20);
    descriptor16.putList(s2t("curve"), list4);
    list.putObject(s2t("curvesAdjustment"), descriptor16);

    reference.putEnumerated(s2t("channel"), s2t("channel"), s2t("blue"));
    descriptor21.putReference(s2t("channel"), reference);
    descriptor22.putDouble(s2t("horizontal"), curObj.channels[3].SH[0]);
    descriptor22.putDouble(s2t("vertical"), curObj.channels[3].SH[1]);
    list5.putObject(c2t("Pnt "), descriptor22);
    descriptor23.putDouble(s2t("horizontal"), curObj.channels[3].DM[0]);
    descriptor23.putDouble(s2t("vertical"), curObj.channels[3].DM[1]);
    list5.putObject(c2t("Pnt "), descriptor23);
    descriptor24.putDouble(s2t("horizontal"), curObj.channels[3].LM[0]);
    descriptor24.putDouble(s2t("vertical"), curObj.channels[3].LM[1]);
    list5.putObject(c2t("Pnt "), descriptor24);
    descriptor25.putDouble(s2t("horizontal"), curObj.channels[3].HL[0]);
    descriptor25.putDouble(s2t("vertical"), curObj.channels[3].HL[1]);
    list5.putObject(c2t("Pnt "), descriptor25);
    descriptor21.putList(s2t("curve"), list5);
    list.putObject(s2t("curvesAdjustment"), descriptor21);
    descriptor5.putList(s2t("adjustment"), list);
    descriptor4.putObject(s2t("to"), s2t("curves"), descriptor5);
    executeAction(s2t("set"), descriptor4, DialogModes.NO);

}

function brighten_Contrast(bcObj) {
    // make(false, 19, 0, false);
    reference.putClass(s2t("adjustmentLayer"));
    descriptor.putReference(c2t("null"), reference);
    descriptor3.putBoolean(s2t("useLegacy"), bcObj.useLegacy);
    descriptor2.putObject(s2t("type"), c2t("BrgC"), descriptor3);
    descriptor.putObject(s2t("using"), s2t("adjustmentLayer"), descriptor2);
    executeAction(s2t("make"), descriptor, DialogModes.NO);
    reference2.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
    descriptor4.putReference(c2t("null"), reference2);
    descriptor5.putInteger(s2t("brightness"), bcObj.brightness);
    descriptor5.putInteger(c2t("Cntr"), bcObj.Cntr);
    descriptor5.putBoolean(s2t("useLegacy"), bcObj.useLegacy);
    descriptor4.putObject(s2t("to"), c2t("BrgC"), descriptor5);
    executeAction(s2t("set"), descriptor4, DialogModes.NO);

}


function snapshot(snapshotName) {
    var doc = app.activeDocument;
    var snapshotDesc01 = new ActionDescriptor();
    var snapshotRef01 = new ActionReference();
    var snapshotRef02 = new ActionReference();

    snapshotName = typeof arguments[0] === 'string' ? snapshotName : 'undefinedName';

    snapshotRef01.putClass(cTID("SnpS"));
    snapshotDesc01.putReference(cTID("null"), snapshotRef01);
    snapshotRef02.putProperty(cTID("HstS"), cTID("CrnH"));
    snapshotDesc01.putReference(cTID("From"), snapshotRef02);
    snapshotDesc01.putString(cTID("Nm  "), snapshotName);
    snapshotDesc01.putEnumerated(cTID("Usng"), cTID("HstS"), cTID("FllD"));
    executeAction(cTID("Mk  "), snapshotDesc01, DialogModes.NO);
}

function replaceSmartObjFile(replaceFile) {
    (desc = new ActionDescriptor()).putPath(charIDToTypeID("null"), new File(replaceFile));
    executeAction(stringIDToTypeID("placedLayerRelinkToFile"), desc, DialogModes.NO);
}

function layerColor(colorCode) {
    reference.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    descriptor.putReference(c2t("null"), reference);
    descriptor2.putEnumerated(s2t("color"), s2t("color"), s2t(colorCode)); //"red"
    descriptor.putObject(s2t("to"), s2t("layer"), descriptor2);
    executeAction(s2t("set"), descriptor, DialogModes.NO);
}



function scanSubFolders(topFolder, fileMask) {
    var subFolders = [];
    var allFiles = [];
    subFolders[0] = topFolder;

    for (var j = 0; j < subFolders.length; j++) { // loop through folders
        var procFiles = subFolders[j].getFiles();
        for (var i = 0; i < procFiles.length; i++) { // loop through folder contents
            if (procFiles[i] instanceof File) {
                if (fileMask === undefined) allFiles.push(procFiles[i]); // if no fileMask then collect all files
                if (procFiles[i].fullName.search(fileMask) != -1) allFiles.push(procFiles[i]); // otherwise only those that match fileMask
            } else if (procFiles[i] instanceof Folder) {
                subFolders.push(procFiles[i]); // store the subfolder
                var folderName = procFiles[i].toString();
                scanSubFolders(procFiles[i], fileMask); // search the subfolder
            }
        }
    }
    return [allFiles, subFolders];
}


function getClippingPathIndex() {
    try {
        var ref = new ActionReference();
        ref.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
        var desc = app.executeActionGet(ref);
        var clippingPath = desc.getObjectValue(cTID("Clpg"));
        return clippingPath.getInteger(cTID("ClpI"));
    }
    catch (er) {
        alert("clippingPathIndex :\n" + er + "\nError Line " + er.Line);
    }
}

function clippingFlatness() {
    var ref = new ActionReference();
    var flatness = -1;
    ref.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
    var desc = executeActionGet(ref);
    if (desc.getObjectValue(sTID('clippingPathInfo')).getInteger(sTID('clippingPathIndex')) !== -1) {
        flatness = desc.getObjectValue(sTID('clippingPathInfo')).getInteger(sTID('clippingPathFlatness')) / 65536;
    }
    return Number(flatness.toFixed(1));
};

function deactivateClippingPath() {
    var cPath = getClippingPathIndex();
    if (cPath !== -1) {
        app.activeDocument.pathItems[cPath].select();
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putProperty(cTID("Path"), cTID("ClPt"));
        desc.putReference(cTID("null"), ref);
        app.executeAction(cTID("Cler"), desc, DialogModes.NO);
        app.activeDocument.pathItems[cPath].deselect();
    }
}



/**   
   * @description To Save the file based on the Format
   * @param  {object}  fileAttributes - PSD { alphaChannels:boolen,layers:boolen, embedColorProfile-Boolen}     
   * @returns {void}
*/


function saveFile(fileType, destPath, fileAttributes, asCopy, lcase) {
    var doc = app.activeDocument;

    fileType = typeof fileType === "string" ? fileType : undefined;
    destPath = typeof destPath === "object" ? destPath : new File(doc.fullName);
    fileAttributes = typeof fileAttributes === "object" ? fileAttributes : {};
    asCopy = typeof asCopy === "boolean" ? asCopy : true;

    if (fileType !== undefined) {
        switch (true) {
            case /tif/i.test(fileType):
            case /tiff/i.test(fileType):
                saveOpts = new TiffSaveOptions();
                saveOpts.alphaChannels = fileAttributes.alphaChannels != undefined ? fileAttributes.alphaChannels : true;
                saveOpts.imageCompression = eval("TIFFEncoding." + (fileAttributes.imageCompression || "TIFFLZW")); // jshint ignore:line
                saveOpts.layerCompression = eval("LayerCompression." + (fileAttributes.layerCompression || "RLE")); // jshint ignore:line
                saveOpts.byteOrder = eval("ByteOrder." + (fileAttributes.byteOrder || "IBM")); // jshint ignore:line
                saveOpts.layers = fileAttributes.layers != undefined ? fileAttributes.layers : true;
                saveOpts.embedColorProfile = fileAttributes.embedColorProfile != undefined ? fileAttributes.embedColorProfile : true;
                saveOpts.transparency = fileAttributes.transparency != undefined ? fileAttributes.transparency : false;
                break;
            case /psd/i.test(fileType):
                saveOpts = new PhotoshopSaveOptions();
                saveOpts.alphaChannels = fileAttributes.alphaChannels != undefined ? fileAttributes.alphaChannels : true;
                saveOpts.layers = fileAttributes.layers != undefined ? fileAttributes.layers : true;
                saveOpts.embedColorProfile = fileAttributes.embedColorProfile != undefined ? fileAttributes.embedColorProfile : true;
                break;
            case /png/i.test(fileType):
                saveOpts = new PNGSaveOptions();
                saveOpts.compression = fileAttributes.compression != undefined ? fileAttributes.compression : 0;
                saveOpts.interlaced = fileAttributes.interlaced != undefined ? fileAttributes.interlaced : false;
                break;
            case /jpg/i.test(fileType):
            case /jpeg/i.test(fileType):
                saveOpts = new JPEGSaveOptions();
                saveOpts.quality = fileAttributes.quality != undefined ? fileAttributes.quality : 12;
                saveOpts.formatOptions = fileAttributes.formatOptions != undefined ? eval("FormatOptions." + (fileAttributes.formatOptions)) : FormatOptions.STANDARDBASELINE;
                if (saveOpts.formatOptions == FormatOptions.PROGRESSIVE) { saveOpts.scans = 3 }; //only used with Progressive  
                break;
            case /eps/i.test(fileType):
                saveOpts = new EPSSaveOptions();
                saveOpts.preview = eval("Preview." + (fileAttributes.preview || "EIGHTBITTIFF")); // jshint ignore:line
                saveOpts.encoding = eval("SaveEncoding." + (fileAttributes.encoding || "JPEGMAXIMUM")); // jshint ignore:line
                break;
        }
        doc.saveAs(destPath, saveOpts, asCopy, lcase === undefined ? Extension.LOWERCASE : lcase);

    } else {
        doc.save();
    }
};


function exportFile(fileType, destPath, fileAttributes) {
    var docRef = app.activeDocument;
    var saveOpts = new ExportOptionsSaveForWeb();

    fileType = typeof fileType === "string" ? fileType : "JPG";
    destPath = typeof destPath === "string" ? new File(destPath) : new File(docRef.fullName);
    fileAttributes = typeof fileAttributes === "object" ? fileAttributes : {};

    switch (true) {
        case /png/i.test(fileType):
            saveOpts.format = SaveDocumentType.PNG;
            // saveOpts.quality = fileAttributes.quality != undefined ? fileAttributes.quality : 100;
            saveOpts.interlaced = fileAttributes.interlaced != undefined ? fileAttributes.interlaced : false;
            saveOpts.transparency = fileAttributes.transparency != undefined ? fileAttributes.transparency : false;
            saveOpts.PNG8 = fileAttributes.PNG8 != undefined ? fileAttributes.PNG8 : true;
            saveOpts.includeProfile = fileAttributes.includeProfile != undefined ? fileAttributes.includeProfile : false;
            break;
        case /jpg/i.test(fileType):
        case /jpeg/i.test(fileType):
            saveOpts.format = SaveDocumentType.JPEG;
            saveOpts.quality = fileAttributes.quality || 100;
            break;
    }

    docRef.exportDocument(destPath, ExportType.SAVEFORWEB, saveOpts);
};

function getLZWcompression() {
    var compressionType;
    var xmpString = app.activeDocument.xmpMetadata.rawData;
    var compressionValue = xmpString.match(/<tiff:Compression>(\d)<\/tiff\:Compression>/);
    if (compressionValue != null) {
        var compression = Number(compressionValue[1]);
        switch (compression) {
            case 1:
                compressionType = "NONE";
                break;
            case 5:
                compressionType = "LZW";
                break;
            case 7:
                compressionType = "JPEG";
                break;
            case 8:
                compressionType = "ZIP";
                break;
            default: compressionType = "unknown";
        }
    }
    return compressionType;
}


function getTransparency_ByteOrder(tiffFile, flgOption) {
    if (tiffFile) {
        var readonly = tiffFile.readonly;   // Let's work around an odd Photoshop CS bug after a file selection dialog !!  
        if (tiffFile.open('r')) {
            tiffFile.encoding = 'BINARY';
            var byteOrder = tiffFile.read(2);
            if (byteOrder == 'MM') flg_ByteOrder = "Macintosh"
            if (byteOrder == 'II') flg_ByteOrder = "IBM PC"
            switch (byteOrder) {
                case 'II':  // IBM PC  
                case 'MM':  // Macintosh  
                    var bigEndian = (byteOrder === 'MM');
                    var magicNumber = readInt(tiffFile, 2, bigEndian);
                    if (magicNumber === 42) {  // Arbitrary but carefully chosen number...                       
                        var hasTransparency = false;
                        var dirOffset = readInt(tiffFile, 4, bigEndian);
                        do {
                            tiffFile.seek(dirOffset);
                            var dirCount = readInt(tiffFile, 2, bigEndian);
                            for (var dirIndex = 0; dirIndex < dirCount; dirIndex++) {
                                var entryTag = readInt(tiffFile, 2, bigEndian);
                                var entryType = readInt(tiffFile, 2, bigEndian);
                                var entryCount = readInt(tiffFile, 4, bigEndian);
                                var entryValueOrOffset = readInt(tiffFile, 4, bigEndian);
                                if (entryTag === 338) {    // ExtraSamples                                   
                                    if (entryType === 3) {     // Short                                      
                                        var values = [];
                                        var entryTypeSize = 2;
                                        var entryValueSize = entryCount * entryTypeSize;
                                        var saveOffset = tiffFile.tell();
                                        if (entryValueSize > 4) {
                                            tiffFile.seek(entryValueOrOffset);
                                            for (var valueIndex = 0; valueIndex < entryCount; valueIndex++) {
                                                values.push(readInt(tiffFile, entryTypeSize, bigEndian));
                                            }
                                        }
                                        else {
                                            tiffFile.seek(-4, 1);  // Rewind 4 bytes  
                                            for (var valueIndex = 0; valueIndex < entryCount; valueIndex++) {
                                                values.push(readInt(tiffFile, entryTypeSize, bigEndian));
                                            }
                                        }
                                        tiffFile.seek(saveOffset);
                                        for (valueIndex = 0; valueIndex < values.length; valueIndex++) {
                                            if (values[valueIndex] === 1) {    // Associated alpha data (with pre-multiplied color)                                              
                                                hasTransparency = true;
                                            }
                                        }
                                    }
                                    else {
                                        throw new Error("Invalid entry type (3 expected):\n" + entryType);
                                    }
                                }
                            }
                            dirOffset = readInt(tiffFile, 4, bigEndian);
                        }
                        while (dirOffset);
                        //return hasTransparency;  
                    }
                    else {
                        alert("Unknown magic number:\n" + magicNumber);
                    }
                    break;
                default:
                    alert("Unknown byte order:\n" + byteOrder);
                    break;
            }
            tiffFile.close();

            if (flgOption == "ByteOrder") return flg_ByteOrder;
            if (flgOption == "Transparency") return hasTransparency;

        }
    }
    function readInt(file, byteCount, bigEndian) {
        var bytes = file.read(byteCount);
        var intValue = 0;
        for (var index = 0; index < byteCount; index++) {
            intValue = (intValue << 8) + bytes.charCodeAt(bigEndian ? index : byteCount - index - 1);
        }
        return intValue;
    }
};

function getJPGFormatOption(file, flgOption) {
    file.open("r");
    file.encoding = 'BINARY';
    filestring = file.read();
    file.close();
    var WebJPEG_Qualit = [];
    var count = filestring.search(/\xFF\xEC/);
    if (count > 200) count = -1;
    if (count != -1) {//Yes it is Save ForWeb
        count += 16;
        var Quality = filestring[count].charCodeAt(0);
        if (flgOption == "JPEG_Quality") return Quality + "  [ Web Quality ]";
        if (flgOption == "JPEG_FormatOption") return undefined;
    }
    count = filestring.search(/\xFF\xE1/);
    if (count != -1) {
        filestring = filestring.substring(count + 10);
        count = filestring.search(/\xFF\xE1/);
    }
    if (count == -1) {//This file has not been edited with Photoshop!
        alert(decodeURI(file.name) + " has not been edited/saved with Photoshop!");
        return;
    }
    count -= 8;
    var Result = 0;
    var FormatType = 0;
    if (filestring[count] == 0) {
    } else {
        Result = filestring[count].charCodeAt(0);
    }
    count++;
    if (filestring[count] == 0) {
    } else {
        Result += filestring[count].charCodeAt(0);
    }
    count++;
    if (filestring[count] == 0) {
    } else {
        FormatType += filestring[count].charCodeAt(0);
    }
    count++;
    if (filestring[count] == 0) {
    } else {
        FormatType += filestring[count].charCodeAt(0);
    }
    var Format = '';
    switch (FormatType) {
        case 0: Format = "Format Standard";
            break;
        case 1: Format = "Format Optimised";
            break;
        case 2: Format = "Format Progressive";
            break;
        default: break;
    }
    var Qualities = [507, 508, 509, 510, 0, 1, 2, 3, 4, 5, 6, 7, 8];
    var JPEG_Qul = [];
    for (var a = 0; a < Qualities.length; a++) {
        if (Result == Qualities[a]) {
            if (flgOption == "JPEG_Quality") return a;
            if (flgOption == "JPEG_FormatOption") return Format;
        }
    }
};

function getEPSencoding(theFile) {
    var epsFile = new File(theFile);
    if (epsFile) {
        if (epsFile.open("r")) {
            while (!epsFile.eof) {
                var line = epsFile.readln();
                var found = line.match(/^%ImageData:\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/);
                if (found) {
                    var dataFormatIndex = found[7];
                    var dataFormats =
                        [
                            "Binary",
                            "ASCII",
                            "JPEG (low quality)",
                            "JPEG (medium quality)",
                            "JPEG (high quality)",
                            "JPEG (max. quality)",
                            "ASCII85"
                        ];
                    return dataFormats[dataFormatIndex - 1];
                }
            }
            epsFile.close();
        }
    }
};


/**
 *  to Create Error logs.
 * @param {string} log - error log files     
*/
function OutFoldLog(log) {
    var outfolder = new Folder(log.filePath)
    if (!outfolder.exists) {
        outfolder.create();
        var myLogFile = new File(outfolder + "/" + log.name + log.ext);
        myLogFile.open("a", undefined, undefined)
        myLogFile.writeln("File Name" + log.separator + "Error Description");
    }
    var myLogFile = new File(outfolder + "/" + log.name + log.ext);
    myLogFile.open("a", undefined, undefined);
    myLogFile.writeln(log.fileName + log.separator + log.errDescription + log.separator + log.errNumber);
    myLogFile.close();
}

