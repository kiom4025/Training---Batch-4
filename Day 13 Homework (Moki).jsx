var docRef = app.activeDocument;
var _width = 2000;
var _height = 2000;
var res = 300;
// var l = 100, r = 100, t = 100, b = 100; // Horizontal and vertical center
var l = 100, r = 100, t = 50, b = 150; // Bottom placement
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
        // theDup.resizeImage(UnitValue(actWidth, "Px"), UnitValue(actWidth / docratio, "Px"), res, ResampleMethod.AUTOMATIC);
        theDup.resizeImage(UnitValue(actWidth, "Px"), null, null, ResampleMethod.AUTOMATIC);
    }
    else {
        // theDup.resizeImage(UnitValue(actHeight * docratio, "Px"), UnitValue(actHeight, "Px"), res, ResampleMethod.AUTOMATIC);
        theDup.resizeImage(null, UnitValue(actHeight, "Px"), null, ResampleMethod.AUTOMATIC);
    }

    // Horizontal and vertical center
    // theDup.resizeCanvas(UnitValue(_width, "Px"),  UnitValue(_height, "Px"), AnchorPosition.BOTTOMCENTER);
    
    // Bottom placement
    theDup.resizeCanvas(UnitValue(_width, "Px"), null, AnchorPosition.MIDDLECENTER);
    theDup.resizeCanvas(null,  UnitValue(theDup.height + b, "Px"), AnchorPosition.TOPCENTER);
    theDup.resizeCanvas(null,  UnitValue(_height, "Px"), AnchorPosition.BOTTOMCENTER);

    // alert("Document opened");
    // theDup.close(SaveOptions.DONOTSAVECHANGES);
    // theDup.close(SaveOptions.SAVECHANGES)


    // theDup.close(SaveOptions.PROMPTTOSAVECHANGES)    
} else {
    alert("Path not found");
}

