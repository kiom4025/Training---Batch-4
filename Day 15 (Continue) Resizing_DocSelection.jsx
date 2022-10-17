// #includepath "/Volumes/Premedia/02 PMT SMART TOOLS/03 DEVELOPMENT TEAM/01 IMAGE WORKFLOW/Utility Scripts/"
// #include "../Utility Scripts/ScriptLIB.jsx"

//@include "ScriptLib.jsx"

//clear, copy, cut, contract, fill, stroke, selectAll, deselect, select,
//expand, feather, invert, smooth, store, load, translate, rotate, resize, makeWorkPath

// Crop({ left: 164, top: 184, right: 2912, bottom: 3000, delPixel: true })
var docRef = app.activeDocument;

// docRef.selection.selectAll();
// docRef.pathItems[0].makeSelection(0.5, true, SelectionType.REPLACE);
var tmp = hasSelection(docRef);

// Load Selection from Channel
// if ((docRef.channels.length - docRef.componentChannels.length) > 0) {
//     docRef.selection.load(docRef.channels[docRef.channels.length - 1]);
// } else {
//     alert("There is no channel Mask in the Document");
// }
alert(1+  1+2);

if (hasSelection(docRef)) {
    // docRef.selection.clear();
    // docRef.selection.contract(5);
    // var actChn = docRef.activeChannels;
    // var myColor = new SolidColor();
    // myColor.rgb.hexValue = "ff0000";
    // // var chanRef = docRef.channels.add();
    // chanRef.name = "crop";
    // chanRef.kind = ChannelType.SELECTEDAREA;
    // chanRef.color = myColor;

    // docRef.selection.expand(15);
    // docRef.selection.feather(1);
    // docRef.selection.store(chanRef, SelectionType.REPLACE);
    // docRef.selection.deselect();
    // docRef.activeChannels = actChn;

    //------------Fill----------------
    // docRef.selection.invert();
    // docRef.selection.fill(myColor);
    // // docRef.selection.fill(app.backgroundColor);
    // // docRef.selection.fill(app.foregroundColor);
    // docRef.selection.deselect();
    //------------Storke----------------
    // docRef.selection.stroke(myColor, 5, StrokeLocation.INSIDE, ColorBlendMode.NORMAL);
    // docRef.selection.deselect();

    // Translate dx, dy dx- Horz, dy-Vertical
    // docRef.selection.translate(-500, 500);
    // docRef.selection.resize(175, 175, AnchorPosition.TOPLEFT);
    // docRef.selection.rotate(15, AnchorPosition.BOTTOMCENTER);
    docRef.selection.makeWorkPath(3)
}