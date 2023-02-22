var word1 = "Javascript";
var word2 = "GoogleChrome";
var word3 = "Developer smart";
function squreOfWordLength (word){
    console.log(`the given string is:${word}`);
    console.log(`the length of word:${word.length}`);
    console.log(`the squre of length:${word.length**2}`);
    console.log(`**************************************`);

}
squreOfWordLength(word1);
squreOfWordLength(word2);
squreOfWordLength(word3);

function angular(){
    var ang ="I Am Angular Developer";
    return ang;
}
var str = angular();
var strLength = str.length;
console.log("string length is:",strLength);

var splitresult = str.split(" ");
console.log("total  words:",splitresult.length);

var  result=  strLength / splitresult.length;
console.log("after dividing :",result);

var  result1=  strLength * splitresult.length;
console.log("after multiplication :",result1);




