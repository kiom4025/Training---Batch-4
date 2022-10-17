//@include "json3.js"
var docRef = app.activeDocument;
// docRef.trim(TrimType.TOPLEFT);
var metdata = docRef.info.caption;
var tmp = '"Welcome"';
// $.writeln(metdata);
try {
    metdata = JSON.parse(docRef.info.caption);
    $.writeln(metdata.angle_code)
    $.writeln(metdata.angle)
} catch (er) {
    alert(er);
    var strArr = metdata.split(",")
    // $.writeln(strArr.length);
    var angleCode;
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i].indexOf("angle_code") !== -1) {
            angleCode = ((strArr[i]).split(":")[1]).replace(/[""]/g, "").toString();
            break;
        }
    }
    $.writeln(angleCode + "\t" + tmp);
}
// $.writeln(strArr)

// $.writeln(JSON.stringify(metdata));    
