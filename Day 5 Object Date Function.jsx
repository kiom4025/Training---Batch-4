// function Print(name, age, gender, address, pincode, qualification, married) {
//     $.writeln("Name : " + name + "\n" + "age : " + age + "\n" + "gender : " + gender + "\n" + "address : " + address + "\n" + "pincode : " + pincode + "\n"
//         + "qualification : " + qualification + "\n" + "married : " + (married ? "Yes" : "No") + "\n");
// }


// Print("VJ", 34, "chennai", "M", 600080, "MCA", true);


// function Print(person) {
//     for (var i = 0; i < person.length; i++) {
//         $.writeln("Name : " + person[i].name + "\n" + "age : " + person[i].age + "\n" + "gender : " + person[i].gender + "\n" + "address : " + person[i].address + "\n" + "pincode : " + person[i].pincode + "\n"
//             + "qualification : " + person[i].qualification + "\n" + "married : " + (person[i].married ? "Yes" : "No") + "\n");
//     }
// }


// var data = [{ age: 34, address: "chennai", gender: "M", pincode: 600080, qualification: "MCA", married: true, name: "VJ" }, { age: 44, address: "Chennai", gender: "M", pincode: 600080, qualification: "MCA", married: true, name: "ANAND" }]
// Print(data);

const d = new Date();
// $.writeln(d.getDate());
// $.writeln(d.getMilliseconds());
// $.writeln(d.getHours());
// $.writeln(d.getSeconds());

$.writeln(d.getMonth()+1+"/"+d.getDate()+"/"+d.getFullYear()+" " +d.getHours()+":"+d.getMinutes()); // IST
$.writeln(d.getUTCMonth()+1+"/"+d.getUTCDate()+"/"+d.getUTCFullYear()+" " +d.getUTCHours()+":"+d.getUTCMinutes()); // UTC


