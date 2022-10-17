// create path intersections;


if (app.documents.length > 0) {
    var myDocument = app.activeDocument;
    // set to pixels;
    var originalRulerUnits = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.POINTS;
    var theArray = new Array;
    var theNumber = myDocument.pathItems.length;
    var theNum = myDocument.pathItems.length;

    // »simplify« paths and collect components;
    for (var m = 0; m < theNumber; m++) {
        myDocument.pathItems[m].select();
        combinePath();
        theArray.push(collectPathComponents(myDocument, myDocument.pathItems[m]));
    };

    // create intersections;
    for (var n = 1; n < theNumber; n++) {
        //alert(OV_Path);
        var theFirst = collectPathComponents(myDocument, myDocument.pathItems[0]);
        var theSecond = theArray[n];
        for (var a = 0; a < theSecond.length; a++) {
            theFirst.push(theSecond[a]);
        };
        var thePath = createPathFromPathComponentActionDesc(theFirst, "intersect", 0);
        makePath(myDocument.pathItems[n].name + "_");
        combinePath();
    };


    // create subtraction;
    var theFirst = collectPathComponents(myDocument, myDocument.pathItems[0]);
    for (var o = 1; o < theNumber; o++) {
        var theSecond = theArray[o];
        for (var a = 0; a < theSecond.length; a++) {
            theFirst.push(theSecond[a])
        };
    };
    var thePath = createPathFromPathComponentActionDesc(theFirst, "subtract", 1);
    //subtract
    makePath("Flesh");
    combinePath();
    //alert(theNumber );


    var myDocument = app.activeDocument;
    var idx = theNumber - 1;
    while (theNumber > 1) {
        activeDocument.pathItems[idx].remove();
        idx--;
        theNumber--;
    };
    //alert(theNum)
    for (var m = 1; m < theNum; m++) {
        var PathName = myDocument.pathItems[m].name
        //alert(PathName);
        var l = PathName.length;
        myDocument.pathItems[m].name = PathName.substring(0, l - 1)
        //alert(myDocument.pathItems[m].name);
    };

    // reset;
    app.preferences.rulerUnits = originalRulerUnits;
};


function combinePath() {
    // =======================================================
    var idcombine = stringIDToTypeID("combine");
    var desc4 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref3 = new ActionReference();
    var idPath = charIDToTypeID("Path");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref3.putEnumerated(idPath, idOrdn, idTrgt);
    desc4.putReference(idnull, ref3);
    executeAction(idcombine, desc4, DialogModes.NO);
};
//components correspond to subPathItems,  subpathList contains the actual paths than can make up one subPathItem ;
////// collect path infor from actiondescriptor //////
function collectPathComponents(myDocument, thePath) {
    //var myDocument = app.activeDocument;
    var originalRulerUnits = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.POINTS;
    // based of functions from xbytor’s stdlib;
    var ref = new ActionReference();
    for (var l = 0; l < myDocument.pathItems.length; l++) {
        var thisPath = myDocument.pathItems[l];
        if (thisPath == thePath && thisPath.name == "Work Path") {
            ref.putProperty(cTID("Path"), cTID("WrPt"));
        };
        if (thisPath == thePath && thisPath.name != "Work Path" && thisPath.kind != PathKind.VECTORMASK) {
            ref.putIndex(cTID("Path"), l + 1);
        };
        if (thisPath == thePath && thisPath.kind == PathKind.VECTORMASK) {
            var idPath = charIDToTypeID("Path");
            var idPath = charIDToTypeID("Path");
            var idvectorMask = stringIDToTypeID("vectorMask");
            ref.putEnumerated(idPath, idPath, idvectorMask);
        };
    };

    var desc = app.executeActionGet(ref);
    var pname = desc.getString(cTID('PthN'));
    //alert(pname);
    // create new array;
    var theArray = new Array;
    var pathContents = desc.getObjectValue(cTID("PthC"));
    var pathComponents = pathContents.getList(sTID('pathComponents'));
    for (var m = 0; m < pathComponents.count; m++) {
        var comp = pathComponents.getObjectValue(m);
        var subPathList = comp.getList(sTID("subpathListKey"));
        var shapeOp = comp.getEnumerationType(sTID("shapeOperation"));
        //alert("shapeOp - "+shapeOp);    q
        theArray.push([comp, subPathList, shapeOp]);
    };

    // by xbytor, thanks to him;
    function cTID(s) { return cTID[s] || cTID[s] === app.charIDToTypeID(s); };
    function sTID(s) { return sTID[s] || sTID[s] === app.stringIDToTypeID(s); };

    // reset;
    app.preferences.rulerUnits = originalRulerUnits;
    return theArray;
};

////// create a path from an array of pathcomponents //////
function createPathFromPathComponentActionDesc(theArray, shapeOperation, flag) {
    cTID = function (s) { return app.charIDToTypeID(s); };
    sTID = function (s) { return app.stringIDToTypeID(s); };
    //
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Path'), cTID('WrPt'));
    desc1.putReference(sTID('null'), ref1);
    var list1 = new ActionList();

    for (var m = 0; m < theArray.length; m++) {
        var desc37 = new ActionDescriptor();
        if (m == 0 && flag === 0) {
            desc37.putEnumerated(sTID('shapeOperation'), sTID('shapeOperation'), cTID('Intr'));
        }
        else if (m == 0 && flag === 1) {
            desc37.putEnumerated(sTID('shapeOperation'), sTID('shapeOperation'), theArray[m][2]);
        }
        else {
            switch (shapeOperation) {
                case "intersect":
                    desc37.putEnumerated(sTID('shapeOperation'), sTID('shapeOperation'), cTID('Intr'));
                    break;
                case "subtract":
                    desc37.putEnumerated(sTID('shapeOperation'), sTID('shapeOperation'), cTID('Sbtr'));
                    break;
                default:
                    desc37.putEnumerated(sTID('shapeOperation'), sTID('shapeOperation'), theArray[m][2]);
                    break;
            };
        };
        var list5 = new ActionList();
        desc37.putList(cTID('SbpL'), theArray[m][1]);
        list1.putObject(cTID('PaCm'), desc37);
    };
    desc1.putList(cTID('T   '), list1);
    executeAction(cTID('setd'), desc1, DialogModes.NO);

};

////// make work path regular path //////
function makePath(aName) {
    // =======================================================
    var idMk = charIDToTypeID("Mk  ");
    var desc4 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref2 = new ActionReference();
    var idPath = charIDToTypeID("Path");
    ref2.putClass(idPath);
    desc4.putReference(idnull, ref2);
    var idFrom = charIDToTypeID("From");
    var ref3 = new ActionReference();
    var idPath = charIDToTypeID("Path");
    var idWrPt = charIDToTypeID("WrPt");
    ref3.putProperty(idPath, idWrPt);
    desc4.putReference(idFrom, ref3);
    var idNm = charIDToTypeID("Nm  ");
    desc4.putString(idNm, aName);
    executeAction(idMk, desc4, DialogModes.NO);
};

function Path_Info() {
    var theArray = new Array;
    var myDocument = app.activeDocument;
    var theNumber = myDocument.pathItems.length;
    // »simplify« paths and collect components;
    for (var m = 0; m < theNumber; m++) {
        myDocument.pathItems[m].select();
        combinePath();
        theArray.push(collectPathComponents(myDocument, myDocument.pathItems[m]));
    };


}