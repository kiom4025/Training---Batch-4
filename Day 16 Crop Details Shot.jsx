//@include "ScriptLib.jsx"
var docRef = app.activeDocument;
var _width = 2000;
var _height = 2000;
var res = 300;
var l = 100, r = 100, t = 100, b = 100;
var verCenter = "center"
var hozCenter = "center";
var pathLen = docRef.pathItems.length;


activeDocument.selection.selectAll();
var docBounds = activeDocument.selection.bounds
// docRef.pathItems[0].makeSelection(0.5, true, SelectionType.REPLACE);
docRef.pathItems[0].makeSelection(0.5, true, SelectionType.INTERSECT);
var prodBounds = activeDocument.selection.bounds

var docWidth = docBounds[2].value - docBounds[0].value;
var docHeight = docBounds[3].value - docBounds[1].value;

$.writeln(docBounds + "\n" + prodBounds);

var crop = "";
if (docBounds[0].value === prodBounds[0].value) crop += "Left ";
if (docBounds[1].value === prodBounds[1].value) crop += "Top ";
if (docBounds[2].value === prodBounds[2].value) crop += "Right ";
if (docBounds[3].value === prodBounds[3].value) crop += "Bottom";

var cropStatus = crop;
crop = crop.replace(/\s/, "");

if (crop.indexOf("Left") !== -1) l = 0;
if (crop.indexOf("Top") !== -1) t = 0;
if (crop.indexOf("Right") !== -1) r = 0;
if (crop.indexOf("Bottom") !== -1) b = 0;

var actWidth = _width - (l + r);
var actHeight = _height - (t + b);

$.writeln(crop + "\nLeft : " + l + "\nTop : " + t + "\nRight : " + r + "\nBottom : " + b);

if (pathLen !== 0) {
    // duplicate doucument
    var theDup = docRef.duplicate("Dup Document", false);
    // make selection from path
    theDup.pathItems[0].makeSelection(0.5, true, SelectionType.REPLACE);
    theDup.crop(theDup.selection.bounds);
    var docratio = theDup.width / theDup.height;
    theDup.resizeImage(null, null, res, ResampleMethod.NONE);

    var cropObj = {
        height: _height,
        width: _width,
        padding: {
            Left: l,
            Right: r,
            Top: t,
            Bottom: b
        },
        imageCropStatus: cropStatus
    }

    if (theDup.width >= theDup.height) {
        theDup.resizeImage(UnitValue(actWidth, "Px"), UnitValue(actWidth / docratio, "Px"), res, ResampleMethod.AUTOMATIC);
        // theDup.resizeCanvas(UnitValue(_width, "Px"), UnitValue(_height, "Px"), AnchorPosition.MIDDLECENTER);
    }
    else {
        theDup.resizeImage(UnitValue(actHeight * docratio, "Px"), UnitValue(actHeight, "Px"), res, ResampleMethod.AUTOMATIC);
        // theDup.resizeCanvas(UnitValue(_width, "Px"), UnitValue(_height, "Px"), AnchorPosition.MIDDLECENTER);
    }

    setCanvas(cropObj);

    // if (crop.indexOf("Left") !== -1) {
    //     theDup.resizeCanvas(UnitValue(theDup.width + r, "Px"), null, AnchorPosition.MIDDLELEFT);
    // }
    // if (crop.indexOf("Top") !== -1) theDup.resizeCanvas(null, UnitValue(theDup.height + b, "Px"), AnchorPosition.TOPCENTER);
    // if (crop.indexOf("Right") !== -1) theDup.resizeCanvas(UnitValue(theDup.width + l, "Px"), null, AnchorPosition.MIDDLERIGHT);
    // if (crop.indexOf("Bottom") !== -1) theDup.resizeCanvas(null, UnitValue(theDup.height + t, "Px"), AnchorPosition.BOTTOMCENTER);

    // if (theDup.width.value !== _width) {
    //     diff = _width - theDup.width.value;
    //     theDup.resizeCanvas(UnitValue(theDup.width.value + diff, "Px"), null, AnchorPosition.MIDDLECENTER);
    // } else if (theDup.height.value !== _height) {
    //     diff = _height - theDup.height.value;
    //     theDup.resizeCanvas(null, UnitValue(theDup.height.value + diff, "Px"), AnchorPosition.MIDDLECENTER);
    // }



    // alert("Document opened");
    // theDup.close(SaveOptions.DONOTSAVECHANGES);
    // theDup.close(SaveOptions.SAVECHANGES)


    // theDup.close(SaveOptions.PROMPTTOSAVECHANGES)    
} else {
    alert("Path not found");
}

