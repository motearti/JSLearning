console.log(`=========Arithmatic operator===========`);
var num1=10;
var num2=2;
var result= num1+num2;//addition
console.log(`Addition is ${result}`);

 result= num1-num2;//substration
console.log(`substration is ${result}`);

result= num1* num2;//substration
console.log(`mul is ${result}`);

result = num1 ** num2;
 console.log(`Exponential is  ${result}`);

 //10 *** 3=10*10*10
 result = num1 /3;   //console.log(10/3);
console.log(`divi is ${result}`);

result = num1 % 3; // Modulus
console.log(` Reminder is ${result} `);


var num = 10; // Compound addition +=
 num+=20; // num = num + 20
 console.log(`Compound addition += ${num}`);

 console.log(`camparison operator`);
 var num3 = 10;
 console.log(num3==10);
 console.log(num3==11);

 var num4 ="10";
 console.log(num3==num4); //"10"==10 automatic cnversion or emplisic 

console.log(num3===num4);

console.log(num3 != num4); //!not

console.log(10 > 20);//greater equal

console.log(20< 10);//less than

var marks = 35;
console.log( marks >= 35); //>greater than equal

//ternary operator
var marks =70;
var result = marks >=60 ? "allow him for interview" : "dont allow" ;//ternary operator ( a ? b : c)

console.log(result);

var age =22;
var res = age >= 21 ? true : false;
console.log(res);

var myNumber =7;
//even - divide by 2 reminder is 0
var result = myNumber%2==0 ? "even" : "odd";
console.log(result);

var num1 =10;
var num2 =12;
var result = num1>num2 ? num1 :num2;
console.log(result);

//function greaterNumber(num1,num2)

function wordLength(){
var wordLength= wordLength.length;
wordLength%2==0 ? "Even" : "odd";
return result;
}

var result = wordLength("JavaScript");
console.log(`Word "JavaScript" has ${result} length` );
// var result = wordLength("Google");
console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );


function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);