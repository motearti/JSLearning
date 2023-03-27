var reverseString = function (str) {
  var reverse = ""; // wo
  for (let index = str.length - 1; index >= 0; index--) {
    // 9
    var charAt = str.charAt(index);
    reverse = reverse + charAt; // "w"+"o" ==> "wo"
  }
  return reverse;
};
var result = reverseString("Do it anyhow");
console.log(`Reverse String is: ${result}`);

//last word reverse
var reverseStr = function (str) {
  // str = "Do it anyhow"
  var reverse = ""; // wohyna
  for (let index = str.length - 1; index >= 0; index--) {
    var char = str.charAt(index); // o
    if (char == " ") {
      break;
    }
    reverse = reverse + char; // "w"+"o" ==> "wo"
  }
  return reverse;
}
var result = reverseStr("Do it anyhow");
console.log(`Reverse last word : ${result}`);


// "I am Angular  champ"
var str = "I am Angular  champ";
var count = 0;
for (let index = 0; index < str.length; index++) {
  var char = str.charAt(index);
  if (char == " ") {
    count = count + 1;
  }
}
console.log("Total number of spaces is: ", count);

var str = "I am angular developer";
var count = 0;
for (let index = 0; index <= str.length; index++) {
  var char = str.charAt(index);
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    count = count +1 ;
  }
}
console.log("the owels in string is:",count);


var firstWordLength =function(strGiven){ //"focus is the key"

  var firstWord="";//focus
  for (let index=0 ;index <strGiven.length; index++){
   var char = strGiven.charAt(index);
  if(char==" "){
  break;
} 
firstWord= firstWord+char;//f+o
}
 return firstWord;
}


let word =firstWordLength("focus is the key");
console.log(word);