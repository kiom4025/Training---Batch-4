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
        theDup.resizeImage(UnitValue(w, "Px"), UnitValue(h, "Px"), res, ResampleMethod.AUTOMATIC);
        theDup.resizeCanvas(_width, null, AnchorPosition.MIDDLECENTER);
    }

    // alert("Document opened");
    // theDup.close(SaveOptions.DONOTSAVECHANGES);
    // theDup.close(SaveOptions.SAVECHANGES)


    // theDup.close(SaveOptions.PROMPTTOSAVECHANGES)    
} else {
    alert("Path not found");
}

