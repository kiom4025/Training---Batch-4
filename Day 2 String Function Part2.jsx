//Length
// var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// alert(txt.length);

//Slice
// var str = "Apple, Banana, Kiwi";
// alert(str.slice(-4))     // Returns Banana
// // alert(str.slice(13))    

//substring
// var str = "Apple, Banana, Kiwi";
// alert(str.substring(7, 13))    // Returns Banana

//substr
// var str = "Apple, Banana, Kiwi";
// alert(str.substr(7,6))    // Returns Banana

//Replace
// var text = "Please visit iNdIa! Welcome india, INDIA";
// var newText = text.replace(/India/ig, "Chennai");
// alert(newText);

// var newText = (text.toLowerCase()).replace("india", "Chennai");
// alert(newText);

// var newText = text.replace("india", "Chennai");
// alert(newText);

// if(newText.indexOf("Chennai")==-1){alert("Chennai not Replaced")}
// else {alert("Chennai Replaced")}

//toUpperCase
// var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();// text2 is text1 converted to upper
alert(text2);

// var text2 = text1.toLowerCase()
// alert(text2);

var str = "Please locate where 'locate' occurs!";
alert(str.search(/locate/ig));

alert(str.substr(str.search(/locate/ig),6))
alert(str.split("locate").length-1)

var text = "The rain in SPAIN stays mainly in the plain";
alert(text.match(/ain/g).length)    // Returns an array [ain,ain,ain]

