// #includepath "/Volumes/Premedia/02 PMT SMART TOOLS/03 DEVELOPMENT TEAM/01 IMAGE WORKFLOW/Utility Scripts/"
// #include "../Utility Scripts/ScriptLIB.jsx"

//@include "ScriptLib.jsx"

//clear, copy, cut, contract, fill, stroke, selectAll, deselect, select,
//expand, feather, invert, smooth, store, load, translate, rotate, resize, makeWorkPath

// Crop({ left: 164, top: 184, right: 2912, bottom: 3000, delPixel: true })
var docRef = app.activeDocument;

// docRef.selection.selectAll();

if (hasSelection(docRef)) {
    // docRef.selection.clear();
    // docRef.selection.contract(5);

    var actChn = docRef.activeChannels;
    var myColor = new SolidColor();
    myColor.rgb.hexValue = "05fb1c";
    var chanRef = docRef.channels.add();
    chanRef.name = "crop";
    chanRef.kind = ChannelType.SELECTEDAREA;
    chanRef.color = myColor;

    docRef.selection.expand(15);
    docRef.selection.feather(1);
    docRef.selection.store(chanRef, SelectionType.REPLACE);
    docRef.selection.deselect();
    docRef.activeChannels = actChn;
}