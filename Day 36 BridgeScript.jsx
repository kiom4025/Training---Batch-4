// @target bridge
// NtC = new MenuElement('command', 'Paths', 'at the end of Thumbnail')
// NtC.onSelect = function () {
//     function rec(sF, dst, i) {
//         if (fld = io(sF)) sF = sF.getFiles(); for (; i < sF.length; i++) {
//             if (io(fof = sF)) dst.push(fof.name), rec(fof, dst, 0)
//             else if ((r = /.tif$/i).test(fof)) {
//                 (function () {
//                     (fle = File(fof)).open('r'), fle.encoding = 'binary'
//                     var r = fle.read(); var p = r.indexOf('8BIM\x04\x01')
//                     if (!(p + 1)) var p = r.indexOf('8BIM\x07\u00D0\x06')
//                     fle.close(); if (p + 1) fof.rename('_' + fof.name)
//                 })()
//             }
//         }
//         return dst
//     }

//     function io(v) { return v instanceof Folder }
//     if (len = (sel = (ad = app.document).selections).length) {
//         for (h = 0; h < len; h++) if (io(spec = sel.spec)) rec(spec, [], 0)

//     }

// }

if (BridgeTalk.appName == "bridge") {
    clipPaths = MenuElement.create("command", "Sort Clipping Paths", "at the end of Tools", "clipping");
}

clipPaths.onSelect = function () {
    app.document.deselectAll();
    var thumbs = app.document.getSelection("psd, tif, jpg, eps");
    var noPath = new Folder(app.document.presentationPath + '/noPath');
    var hasPath = new Folder(app.document.presentationPath + '/hasPath');
    var hasClip = new Folder(app.document.presentationPath + '/hasClip');

    if (!noPath.exists) noPath.create();
    if (!hasClip.exists) hasClip.create();
    if (!hasPath.exists) hasPath.create();
    for (var a in thumbs) {
        var tempFile = thumbs.spec;
        var Path = false;
        var Clip = false;
        tempFile.encoding = 'BINARY';
        tempFile.open('r');
        var str = tempFile.read();
        tempFile.close();
        var pathTag = '8BIM\x07\xd0';
        var clippingPathTag = '8BIM\x0b\xb7';
        var workPath = '8BIM\x04\x01';
        var tagPos = str.match(pathTag);

        if (tagPos) {
            Path = true;
            tagPos = str.match(clippingPathTag);
            if (tagPos) {
                Clip = true;
            }
        }
        if (!Path) {
            if (str.match(workPath)) Path = true;
        }
        str = null;
        if (!Path) thumbs.moveTo(noPath);
        if (Path && Clip) thumbs.moveTo(hasClip);
        if (Path && !Clip) thumbs.moveTo(hasPath);
    }
};

