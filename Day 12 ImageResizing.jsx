var clientruler=app.preferences.rulerunits;
app.preferences.rulerunits = Units.PIXELS;
app.backgroundColor.hexValue = "ffffff";
app.backgroundColor.hexValue = "000000";

var docRef = app.activeDocument;
var width = 2500;
var height = 2500;
var resolution = 72;
var docRatio = docRef.width / docRef.height;
var actW, actW;
var flag;

if (docRef.width.value >= docRef.height.value) { // Width
    actW = 2500;
    actH = (2500 / docRatio).toFixed(0);
    flag = 1;
} else { // Height
    var actW, actH;
    actW = Math.round(2500 * docRatio);
    actH = 2500;
    flag = 0;
}
if (confirm("Do you want to change the Document Size?")) {
    docRef.resizeImage(null, null, resolution, ResampleMethod.NONE);
    docRef.resizeImage(actW, actH, resolution, ResampleMethod.AUTOMATIC);
    
    if (flag == 0) docRef.resizeCanvas(width, null, AnchorPosition.MIDDLECENTER);
    else if (flag == 1) docRef.resizeCanvas(null,height, AnchorPosition.MIDDLECENTER);    
}

// // alert(doc.width + "x" + doc.height + "x" + doc.resolution);
// // // $.write(doc.resizeCanvas(width+250 , height+250,AnchorPosition.MIDDLECENTER));
// // alert(doc.width + "x" + doc.height + "x" + doc.resolution);

// app.preferences.rulerunits = clientruler;

// input Statement
// Output Statement alert(""), $.writeln("")
// confirm Statement

// alert("Welcome", "BR alert", true)
// alert("Welcome","BR alert",false)
// $.writeln("Welcome");

// var _width, _height;

// _width = prompt("Enter the Width value", "000", "Alert");
// _height = prompt("Enter the Height value", "000", "Alert");
// alert(_width + " x " + _height);

