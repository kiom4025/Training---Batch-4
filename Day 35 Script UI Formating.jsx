var w = new Window("dialog");
w.orientation = "row";
var panel1 = w.add("panel");
for (var i = 0; i < 5; i++) { panel1.add("radiobutton", undefined, "Rb " + i); }
var panel2 = w.add("panel");
for (var i = 0; i < 5; i++) { panel2.add("radiobutton", undefined, "Rb " + i); }
panel1.children[0].value = true;

panel1.addEventListener("click", function () {
    for (var i = 0; i < panel1.children.length; i++) {
        if (panel1.children[i].value && panel1.children[i].text == "Rb 1") {
            alert(panel1.children[i].text);
        }
        // panel2.children[i].value = false;

    }
}
);
panel2.addEventListener("click", function () {
    for (var i = 0; i < panel2.children.length; i++) {
        if (panel2.children[i].value) {
            alert(panel2.children[i].text);
        }
    }
}
);
w.show();


// var w = new Window('dialog', 'New text anchor');
// w.group = w.add('group');
// w.group.add('statictext {text: "New name:"}');
// w.input = w.group.add('edittext {characters: 20, active: true}');
// w.buttons = w.add('group {alignment: "right"}');
// w.ok = w.buttons.add('button {text: "OK", enabled: false}');
// w.buttons.add('button {text: "Cancel"}');
// w.input.onChanging = function () {
//     w.ok.enabled = !app.activeDocument.hyperlinkTextDestinations.item(w.input.text).isValid;
// }

// if (w.show() == 1 && w.input.text.length > 0) {
//     app.activeDocument.hyperlinkTextDestinations.add(app.selection[0], { name: w.input.text });
// }

// var w = new Window("dialog");
// w.add("panel", [0, 0, 200, 3]);
// w.add("panel", [0, 20, 200, 23]);
// w.add("panel", [100, 0, 103, 50]);
// w.show();


// var w = new Window("dialog");
// var s = w.add("statictext", undefined, "Static");
// var e = w.add("edittext", undefined, "Edit");
// var b = w.add("button", undefined, "Button");
// // The window’s backround
// w.graphics.backgroundColor = w.graphics.newBrush(w.graphics.BrushType.SOLID_COLOR, [0.5, 0.0, 0.0]);
// // Font and its colour for the first item, statictext
// s.graphics.font = ScriptUI.newFont("Helvetica", "Bold", 30);
// s.graphics.foregroundColor = s.graphics.newPen(w.graphics.PenType.SOLID_COLOR, [0.7, 0.0, 0.7], 1);
// // Font and colours for the second item, edittext
// e.graphics.font = ScriptUI.newFont("Letter Gothic Std", "Bold", 30);
// e.graphics.foregroundColor = e.graphics.newPen(e.graphics.PenType.SOLID_COLOR, [1, 0, 0], 1);
// e.graphics.backgroundColor = e.graphics.newBrush(e.graphics.BrushType.SOLID_COLOR, [0.5, 0.5, 0.5]);
// // Font for the tird control, a button. Can’t set colours in buttons
// b.graphics.font = ScriptUI.newFont("Minion Pro", "Italic", 30);
// w.show();


// UI Dynamic Formating
//------------------------------------------
// var win = new Window("dialog");
// var maingroup = win.add("panel {orientation: 'column'}");
// add_row(maingroup);

// var show_btn = win.add("button", undefined, "show");
// show_btn.onClick = function () {
//     var txt = " ";
//     for (var n = 0; n < maingroup.children.length; n++) {
//         txt += maingroup.children[n].edit.text + "\n";
//     }
//     alert("Rows: \n" + txt);
// }
// win.show();
// function add_row(maingroup) {
//     var group = maingroup.add("group");
//     group.edit = group.add("edittext", [" ", " ", 200, 20], maingroup.children.length);
//     group.plus = group.add("button", undefined, "+");
//     group.plus.onClick = add_btn;
//     group.minus = group.add("button", undefined, "-");
//     group.minus.onClick = minus_btn;
//     group.index = maingroup.children.length - 1;
//     win.layout.layout(true);
// }
// function add_btn() {
//     add_row(maingroup);
// }
// function minus_btn() {
//     maingroup.remove(this.parent);
//     win.layout.layout(true);
// }