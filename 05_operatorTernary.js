console.log("================================Assignment no.1================================");
console.log("******************************step1*************************");
function greaterNumber( num1 ,num2){
    var result = num1 > num2 ? num1 : num2  ;
    console.log( `the greater number is " ${result} "`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("**********************************step2************************");
function isEvenOrOddNum(number){
    var result1 = number%2==0 ?true : false;
    console.log(`the given number ${number} is: "${result1}"`);
    return result1;
}
 isEvenOrOddNum(29);
 isEvenOrOddNum(44);
 isEvenOrOddNum(0);
 isEvenOrOddNum(101);

 console.log("********************************step3*********************************");
 function wordLength(word){
    var wordLength =word. length;
    wordLength = word.length%2==0 ?`Even ` : `odd`;
    console.log(`The given Word "${word}" length is :${wordLength}`);
    return wordLength;
 }
 wordLength("Javascript");
 wordLength("Developer");
 wordLength("Google");


