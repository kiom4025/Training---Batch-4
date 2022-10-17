picked = type_ahead(['bat', 'bear', 'beaver', 'bee', 'cat', 'cats and dogs', 'dog', 'maggot', 'moose', 'moth', 'mouse']);
alert(picked);

function type_ahead(animals) {
    var selected, temp;
    var w = new Window('dialog {text: "Quick select", alignChildren: "fill"}');
    var selected = [];
    var entry = w.add('edittext {active: true}');
    var list = w.add('listbox', [0, 0, 150, 250], animals, { multiselect: true });

    // Select the Item which we search
    // entry.onChanging = function () {
    //     temp = this.text;
    //     selected = [];
    //     list.selection = null;
    //     for (var i = 0; i < animals.length; i++) {
    //         if (animals[i].toLowerCase().indexOf(temp) > -1) {
    //             selected.push(i);
    //         }
    //     } list.selection = selected;
    // }

    function addItem(Items, dbObj, flag) {
        if (dbObj.items.length > 0) dbObj.removeAll();
        for (var _i = 0, _len = Items.length; _i < _len; _i++) dbObj.add('item', "" + Items[_i]);
        // dbObj.selection = flag;
    }

    // Filter the Item which we search
    entry.onChanging = function () {
        temp = this.text.slice(-1) === '\\' ? this.text + '\\' : this.text;
        selected = [];
        list.selection = null;

        for (var i = 0; i < animals.length; i++) {
            if (animals[i].toLowerCase().search(temp) > -1) {
                selected.push(animals[i]);
            }
        }
        addItem(selected, list);
    }

    w.add('button {text: "Ok"}');
    if (w.show() != 2) {
        selected = [];
        for (var i = 0; i < list.selection.length; i++) {
            selected.push(list.selection[i].text);
        }
        return selected;
    }
    w.close();
}