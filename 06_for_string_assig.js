console.log("***********************************step1***************************");
var countVowels = function(string){

var count = 0;
for (let index = 0; index <= string.length; index++) {
  var char = string.charAt(index);
  if (char == "a"|| char == "e" || char == "i" || char == "o" || char == "u" || char == "A"|| char == "E" || char == "I" || char == "O" || char == "U"){
    count = count +1 ;
  }
}
return count;
}
var result = countVowels("Javascript is the language Of Internet");
console.log("the  string is'Javascript is the language Of Internet ' and vowel count is:",result);

var result1 = countVowels("I am Angular Developer");
console.log("the  string is' I am Angular Developer' and vowel count is:",result1);

var result2 = countVowels("Hard work and commitment is the key of success");
console.log("the  string is' Hard work and commitment is the key of success ' and vowel count is:",result2);


console.log("**************************step2****************************");
function lastWordCharsCount  (str) {
    var count = ""; 
    
    for (let index = str.length - 1; index >= 0; index--) {
      var char = str.charAt(index); // o
      if (char == " ") {
        break;
      }
      count = count + char;
       // "t"+"e" ==> "te"
    }
    return count;
  }
  var result =lastWordCharsCount ("Javascript is the language Of Internet");
  console.log(`the  string is'Javascript is the language Of Internet ' and total char in last word: ${result.length}`);
  
  var result1 = lastWordCharsCount("I am Angular Developer");
  console.log(`the  string is'I am Angular Developer ' and total char in last word: ${result1.length}`);
  
  var result2 =lastWordCharsCount ("Hard work and commitment is the key of success");
  console.log(`the  string is' Hard work and commitment is the key of success' and total char in last word : ${result2.length}`);
  