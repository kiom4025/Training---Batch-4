// alert("Welcome");

//Dialog Window
// var myWindow = new Window("dialog");
// var myMessage = myWindow.add("statictext");
// myMessage.text = "Hello, world!";
// myWindow.show();

//Palette not working in 2021
// main();

// function main() {
//     var w = new Window('palette');
//     var m = w.add('statictext');
//     m.text = 'Hello, world!';
//     w.show();
// }

// Form Static Text, and Editext
var myWindow = new Window("dialog", "Form");
// myWindow.orientation = "row";

var tpanel = myWindow.add("tabbedpanel");
tpanel.alignChildren = ["fill", "fill"];
var general = tpanel.add("tab", undefined, "General");
general.alignChildren = "fill";

var formPanel = general.add("panel", undefined, 'Input', { borderStyle: 'black' });
var inputGrp = formPanel.add("group");
var radSex = formPanel.add("group");
var chkQual = formPanel.add("group");
var cmbState = formPanel.add("group");
var cmbCity = formPanel.add("group");
var btnGrp = formPanel.add("group");

// btnGrp.orientation = "column";
inputGrp.add("statictext", undefined, "      Name :");
var txtName = inputGrp.add("edittext", [0, 0, 150, 22], "");
txtName.helpTip = "Please enter the Name"
// txtName. = 10; ///important to discuss
// txtName.characters = 10;
txtName.preferredSize.width = 150;

// txtName.preferredSize.height = 150;
txtName.active = true;

// txtGrp.add('edittext', undefined, 'Normal');
// txtGrp.add('edittext', undefined, 'Read only', { readonly: true });
// txtGrp.add('edittext', undefined, 'No echo', { noecho: true });
radSex.add("statictext", undefined, "Sex :");
var radMale = radSex.add("radiobutton", undefined, "Male");
var radFemaleMale = radSex.add("radiobutton", undefined, "Female");
radMale.value = true;

chkQual.add("statictext", undefined, "Qualification :");
var BE = chkQual.add("checkbox", undefined, "BE");
var MCA = chkQual.add("checkbox", undefined, "MCA");
var BSC = chkQual.add("checkbox", undefined, "BSC");
BSC.value = true

cmbState.add("statictext", undefined, "State :");
var states = ["Tamil Nadu", "Kerala", "Andra", "TS"];
var cities = [
    {
        state: "Tamil Nadu",
        city: ["Chennai", "Madurai", "Trichy"]
    },
    {
        state: "Kerala",
        city: ["Thirunatha Puram", "Alapuzla", "Wayanadu"]
    },
    {
        state: "Andra",
        city: ["Thirupathi", "Gundoor", "Nellor"]
    },
    {
        state: "TS",
        city: ["Hydrabad", "xxxxx", "yyyyy"]
    }
]
var state = cmbState.add("dropdownlist", undefined, undefined);

cmbCity.add("statictext", undefined, "City :");
var _city = cmbCity.add("listbox", [0, 0, 120, 100], undefined);

addItem(states, state, -1)
state.onChange = function () {
    getCity(state.selection.text, cities);
}


var okayBtn = btnGrp.add("button", undefined, "OK");
// okayBtn.enabled = false;
btnGrp.add("button", undefined, "Cancel");

var images = tpanel.add("tab", undefined, "Images");
images.alignChildren = "fill";
var img_options = images.add("panel", undefined, "Image Options");
var okayOpBtn = img_options.add("button", undefined, "OK");
tpanel.selection = 0;


function addItem(Items, dbObj, flag) {
    if (dbObj.items.length > 0) dbObj.removeAll();
    for (var _i = 0, _len = Items.length; _i < _len; _i++) dbObj.add('item', "" + Items[_i]);
    dbObj.selection = flag;
}

function getCity(state, cities) {
    for (var i = 0; i < cities.length; i++) {
        if (cities[i].state === state) {
            addItem(cities[i].city, _city, -1);
        }
    }
}

okayBtn.onClick = function () {
    var name = txtName.text
    var sex, qual = "", dpstate, dpcity;
    if (name == "") { alert("Please fill the value"); return; }
    if (radMale.value) sex = "Male";
    else sex = "FeMale";
    if (BE.value) qual += "BE,"
    if (MCA.value) qual += "MCA,"
    if (BSC.value) qual += "BSC,"

    if (state.selection === null) { alert("Please select State"); state.active = true; return; }
    else dpstate = state.selection.text;

    if (_city.selection === null) { alert("Please select City"); _city.active = true; return; }
    else dpcity = _city.selection.text;

    var msg = "Name : " + name + "\n";
    msg += "Sex : " + sex + "\n"
    msg += "Qual : " + qual + "\n"
    msg += "State : " + dpstate + "\n"
    msg += "City : " + dpcity + "\n"
    alert(msg);
    myWindow.close(true);
}

// txtName.onChange = function () {
//     var valid = /^[\d.,]+$/.test(txtName.text);
//     txtName.graphics.backgroundColor = txtName.graphics.newBrush(txtName.graphics.BrushType.SOLID_COLOR, valid ? [1, 1, 1, 1] : [1, 0.5, 0.5, 1]);
//     okayBtn.enabled = valid;
// }

myWindow.show();


