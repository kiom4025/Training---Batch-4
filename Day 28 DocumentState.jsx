//@include "ScriptLib.jsx"
var userFlags = { comp: {}, document: {}, image: {}, layer: {} };
var resultJSON = fetchAMdocInfo(userFlags).layerInfo;
$.writeln(resultJSON);

function fetchAMdocInfo(userFlags) {
    defaultFlags = {
        comp: {
            layerSettings: false
        },
        document: {
            compInfo: true,
            expandSmartObjects: false,
            getCompLayerSettings: false,
            getDefaultLayerFX: false,
            getFullTextStyles: false,
            getPathData: false,
            getTextStyles: false,
            imageInfo: true,
            includeAncestors: false,
            layerInfo: true,
            selectedLayers: false
        },
        image: {
            allInfo: false,
            bounds: true,
            depth: true,
            file: true,
            generatorSettings: false,
            globalLight: false,
            mode: true,
            placed: false,
            profile: true,
            resolution: true,
            selection: true
        },
        layer: {
            allInfo: true,
            artboard: false,
            blendOptions: true,
            bounds: true,
            clipped: true,
            fill: true,
            generatorSettings: false,
            layerEffects: false,
            mask: true,
            name: true,
            maskFeather: true,
            path: false,
            pixels: false,
            protection: true,
            smartObject: false,
            strokeStyle: false,
            text: false,
            type: true,
            visible: true
        }
    };
    var compInfoDesc = new ActionDescriptor();
    var docInfoDesc = new ActionDescriptor();
    var imageInfoDesc = new ActionDescriptor();
    var layerInfoDesc = new ActionDescriptor();
    var ref = new ActionReference();
    var result = {
        documentInfo: {},
        layerInfo: []
    };
    var parsedJSON = {};
    docInfoDesc.putString(app.stringIDToTypeID("version"), "1.4.0"); // requested JSON format version (CC2017)
    ref.putProperty(app.charIDToTypeID("Prpr"), app.stringIDToTypeID("json"));
    ref.putEnumerated(app.charIDToTypeID("Dcmn"), app.charIDToTypeID("Ordn"), app.charIDToTypeID("Trgt"));
    docInfoDesc.putReference(app.charIDToTypeID("null"), ref);
    registerFlagValues(userFlags.comp, defaultFlags.comp, compInfoDesc);
    registerFlagValues(userFlags.document, defaultFlags.document, docInfoDesc);
    registerFlagValues(userFlags.image, defaultFlags.image, imageInfoDesc);
    registerFlagValues(userFlags.layer, defaultFlags.layer, layerInfoDesc);
    layerInfoDesc.putInteger(app.stringIDToTypeID("layerID"), 0);
    imageInfoDesc.putObject(app.stringIDToTypeID("layers"), app.stringIDToTypeID("layers"), layerInfoDesc);
    imageInfoDesc.putObject(app.stringIDToTypeID("comps"), app.stringIDToTypeID("comps"), compInfoDesc);
    docInfoDesc.putObject(app.stringIDToTypeID("whichInfo"), app.stringIDToTypeID("whichInfo"), imageInfoDesc);
    var data = app.executeAction(app.charIDToTypeID("getd"), docInfoDesc, DialogModes.NO).getString(app.stringIDToTypeID("json"));

    // parsedJSON = JSON.parse(app.executeAction(app.charIDToTypeID("getd"), docInfoDesc, DialogModes.NO).getString(app.stringIDToTypeID("json")));		
    // var objToStr = JSON.stringify(parsedJSON.layers);
    // $.writeln(objToStr);

    // result.layerInfo = parsedJSON.layers;
    result.layerInfo = data;
    return result;
};

function registerFlagValues(userValues, defaultValues, actionDesc) {
    var newValues = defaultValues//Object.assign(defaultValues, userValues || {});
    for (var key in newValues) {
        if (newValues.hasOwnProperty(key)) {
            if (newValues[key]) {
                actionDesc.putBoolean(app.stringIDToTypeID(key), newValues[key]);
            }
        }
    }
};