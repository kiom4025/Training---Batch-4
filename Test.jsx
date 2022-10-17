var docRef = app.activeDocument;
var resultObj = {},a;

// Setting a common variable to search inside all the groups
a = docRef;

//
resultObj = searchbyName({
    PARENT : a, 
    Layername : "test", 
    Type : "LayerKind.NORMAL"
});


while(!resultObj.Found){
    try{
    a = a.layerSets[0];
    resultObj = searchbyName({
        PARENT : a, 
        Layername : "test", 
        Type : "LayerKind.NORMAL"
    });
    }
    catch(err){
        break;
    }
}


// set the found layer as active layer
if(resultObj.Found)docRef.activeLayer = resultObj.Layer;
else alert("Not Found!!")




/**
 * 
 * @param {*searchDataObj} dataobj 
 * Provide - PARENT, Layername, Type
 * @returns 
 * resultObj with Layer & Found property <-|-> 
 * Layer - if the layer is present it is stored in this property of resultObj <-|-> 
 * Found - Boolean (True - if found else false)
 */

function searchbyName (dataobj){
    try{
        resultObj.Layer = (dataobj.PARENT).layers.getByName(dataobj.Layername);
        if(resultObj.Layer.kind != dataobj.Type) resultObj.Found = false;
        else resultObj.Found = true;
        return resultObj;
    }
    catch(er){
        resultObj.Found = false;
        return resultObj;
    }
}