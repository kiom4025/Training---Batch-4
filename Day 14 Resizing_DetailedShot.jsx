var docRef = app.activeDocument;
var _width = 2000;
var _height = 2000;
var res = 300;
var l = 100, r = 100, t = 100, b = 100;
var verCenter = "center"
var hozCenter = "center";
var pathLen = docRef.pathItems.length;
var actWidth = _width - (l + r);
var actHeight = _height - (t + b);

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
if (docBounds[3].value === prodBounds[3].value) crop += "Bottom ";

$.writeln(crop);




if (pathLen !== 0) {
    // duplicate doucument
    var theDup = docRef.duplicate("Dup Document", false);
    // make selection from path
    theDup.pathItems[0].makeSelection(0.5, true, SelectionType.REPLACE);
    theDup.crop(theDup.selection.bounds);
    var docratio = theDup.width / theDup.height;
    theDup.resizeImage(null, null, res, ResampleMethod.NONE);
    if (theDup.width >= theDup.height) {
        theDup.resizeImage(UnitValue(actWidth, "Px"), UnitValue(actWidth / docratio, "Px"), res, ResampleMethod.AUTOMATIC);
        theDup.resizeCanvas(UnitValue(_width, "Px"), UnitValue(_height, "Px"), AnchorPosition.MIDDLECENTER);
    }
    else {
        theDup.resizeImage(UnitValue(actHeight * docratio, "Px"), UnitValue(actHeight, "Px"), res, ResampleMethod.AUTOMATIC);
        theDup.resizeCanvas(UnitValue(_width, "Px"), UnitValue(_height, "Px"), AnchorPosition.MIDDLECENTER);
    }

    // alert("Document opened");
    // theDup.close(SaveOptions.DONOTSAVECHANGES);
    // theDup.close(SaveOptions.SAVECHANGES)


    // theDup.close(SaveOptions.PROMPTTOSAVECHANGES)    
} else {
    alert("Path not found");
}

