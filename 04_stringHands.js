
console.log("------------------------------------assign no. 2 ---------------------------");
function stringHandsOn (){
    var str = "   Hey you are doing good, keep it up    ";
    return str;
    
}
var strName = stringHandsOn();
console.log(strName);

console.log("================================================2==================");
var strNameLength = strName.length
console.log("total length of string is :",strNameLength);

console.log("=================================================3================");
var strNameLengthTrim = strName.trim(" ");
console.log("After removing leading and trailing extra spaces string length is:",strNameLengthTrim.length);

console.log("==================================================4===============");

var charLastIndex = strNameLengthTrim.charAt(strNameLengthTrim.length-1);
var charFirstIndex =  strNameLengthTrim.charAt(0);
console.log("last char after trim is:" ,charLastIndex);
console.log("first char after trim is:",charFirstIndex);

console.log("==========================================================5==============");
var splitResult = strNameLengthTrim.split(" ");
console.log(splitResult);
console.log("total words availabe in the string after trim:",splitResult.length);

console.log("====================================================6=================");
var indexOfGood = strNameLengthTrim.indexOf('good');
console.log("index of word good from the string is:",indexOfGood);

console.log("=======================================================7===============");

var sliceResult = strNameLengthTrim.slice(22);
console.log("substring starting from index 22 using slice is: ",sliceResult);

var substringResult = strNameLengthTrim.substring(22);
console.log("substring starting from index 22 using substring is: ",substringResult);

console.log("======================================================8===============");
var stringEndresult = strNameLengthTrim.endsWith("up");
console.log("string ends with word up after step3: ",stringEndresult);

console.log("====================================================9===================");
var stringStartresult = strNameLengthTrim.startsWith("Hey");
console.log("string start with word Hey after step3: ",stringStartresult);

console.log("=====================================================10=============");
console.log("Length of string is: 41");