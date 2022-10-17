// $.writeln(app.documents.length);
// for (var i = 0; i < app.documents.length; i++){
//     $.writeln(app.documents[i].name);
// }

// var sc = new SolidColor();
// sc.rgb.red = 255;
// sc.rgb.green = 255;
// sc.rgb.blue = 255;
// app.backgroundColor = sc;

// var sc = new SolidColor();
// sc.rgb.red = 0;
// sc.rgb.green = 0;
// sc.rgb.blue = 0;
// app.foregroundColor = sc;
var clientRuler = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
app.displayDialogs = DialogModes.NO;

app.foregroundColor.rgb.hexValue = "000000";
app.backgroundColor.rgb.hexValue = "ffffff";

var docRef = app.activeDocument;

$.writeln(docRef.height + " x "+docRef.width + " x "+docRef.resolution);
// docRef.resizeImage(null, null, 300, ResampleMethod.NONE);
// docRef.resizeCanvas(docRef.width + 500, docRef.height + 500, AnchorPosition.MIDDLECENTER);
docRef.resizeCanvas(docRef.width + 500, null, AnchorPosition.MIDDLELEFT);
app.preferences.rulerUnits = clientRuler;


// 2500x2500x72 ImageSize

//250 CanvasSize Middle Center