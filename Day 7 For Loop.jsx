// for(var i=1;i<6;i++){
//     for(var j=0;j<i;j++){
//         $.write(" $ ");
//     }
//     $.writeln();
// }
// for(var i=4;i>0;i--){
//     for(var j=0;j<i;j++){
//         $.write(" $ ");
//     }
//     $.writeln();
// }


// for(var i=1;i<6;i++){
//     $.writeln(i);
// }
// $.writeln("-------------");
// for(var i=5;i>0;i--){
//     $.writeln(i);
// }

$.writeln($.fileName);
var theFolder=Folder($.fileName).parent;
if(Folder(theFolder+"/Sample").exists){
    var jpgFolder=Folder(theFolder+"/Sample/JPG").create();
}else{
    var jpgFolder=Folder(theFolder+"/Sample/JPG").create();
}
