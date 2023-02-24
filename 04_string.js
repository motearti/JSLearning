var greet = "Good Morning";
console.log(typeof greet);

console.log("total number of chars available into this string variable - greet ");
var greetLength =greet.length;//if show property then not use()
console.log("total length of string is:",greetLength);


var charAtIndex3 = greet.charAt(3);
console.log("character available at index 3 is:",charAtIndex3);

console.log("find last character");
var charLastIndex = greet.charAt(greetLength-1);
console.log("last char is:",charLastIndex);


console.log();
var indexOfM = greet.indexOf('M');
console.log("index of char M is:",indexOfM);

console.log("Index of char which is not available into the string: ", greet.indexOf("z"));
console.log("Index of o char: ", greet.indexOf('o'));
console.log("Index of o char using lastIndexOf(): ", greet.lastIndexOf('o'));

var replaceResult= greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case:", replaceResult.toUpperCase());
console.log("Upper Case:", replaceResult.toLowerCase());


var myname="  Arti  Mote  "
var mynameAfterTrim = myname.trim();
console.log("Removing extra start and end spaces using trim(): ",mynameAfterTrim, myname.length, mynameAfterTrim.length);
//find the total extra spaces removed from the string - myname
var count = myname.length - mynameAfterTrim.length;
console.log(count);

console.log(myname.trimStart(),myname.trimEnd());

console.log("Is substring M or includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log("slice ()method");
var sliceResult = greet.slice(5,12);
console.log(sliceResult);
console.log(greet.slice(2,5));

console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("total words:",splitResult.length);


var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var friendlist =myFriendList.split(", ");
console.log(friendlist);

console.log("total words:",friendlist.length);