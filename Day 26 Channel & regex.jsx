//@include "ScriptLib.jsx"
app.displayDialogs = DialogModes.NO
init();

function init() {
    var docRef = app.activeDocument;
    var len = docRef.layers.length;
    var BGND = docRef.layers[len - 1];
    if (!BGND.isBackgroundLayer) { alert("BGND layer was not found"); return; }
    if ((docRef.channels.length - docRef.componentChannels.length) === 0) { alert("User Channel not found"); return; }
    try { docRef.channels.getByName("Alpha 1"); } catch (er) { alert("Alpha 1 mask not found"); return; }
    var chnName = prompt("Please Enter the channel Name", "Alpha 1");

    // while (chnName == null || chnName !== "Alpha 2") {
    //     chnName = prompt("Please Enter the channel Name", "Alpha 1");
    //     if (chnName === "Alpha 2") break;
    // }

    // if (new RegExp("color", "i").test(chnName)) {
    if (new RegExp(/\d+[_]+\d+/g).test(chnName)) {
        alert("found")

    } else alert("not found");


    // alert("Out");
}

function process() {
    alert("in");
}


// if (BGND.isBackgroundLayer) {
    // var compChnLen = docRef.componentChannels.length;
    // var docChnLen = docRef.channels.length;

    // if (docChnLen - compChnLen > 0) {
    //     alert("User Channel found");
    // }
    // else {
    //     alert("User Channel not found");
    // }

//     var allChn = ["Dress", "Alpha1", "Test"];
//     var msg = "";
//     for (var i = 0; i < allChn.length; i++) {
//         try {
//             var dressChn = docRef.channels.getByName(allChn[i]);
//             msg += allChn[i] + " Channel found\n";
//         } catch (er) {
//             msg += allChn[i] + " Channel not found\n";
//         }
//     }
//     $.writeln(msg);


// }
