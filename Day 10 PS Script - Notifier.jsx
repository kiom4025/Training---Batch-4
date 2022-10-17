app.notifiersEnabled = true;
var _theFolder = Folder($.fileName).parent
var theFile = Folder(_theFolder + "/Sample/OpenApp.jsx");
if (!theFile.exists) alert("The File was not found");
else {
    app.notifiers.add("Opn ", theFile);
}