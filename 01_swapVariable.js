console.log("-----------------------(swap variable 1.)----------------");
var sweety = "Sweety";
var cutie ="Cutie";

var temp= sweety;
sweety=cutie;
console.log(sweety,cutie);
cutie=temp;
console.log(sweety,cutie);

console.log("-----------------------(swap variable 2.)----------------");
var num1= 100;
var num2= 200;
var num3= 300;

var temp= num1;
var temp1= num2;
var temp2= num3;

num1=num2;
console.log(num1,num2);
num2= temp;
console.log("----------swap 1st with 2nd-----------");
console.log(num1,num2);

console.log("----------swap 2nd with 3rd-----------");
num2=num3;
console.log(num2,num3);
num3= temp1;
console.log(num2,num3);

console.log("----------swap 3rd with 1st-----------");
num3=temp;
console.log(num3,num1);
num1=temp2;
console.log(num3,num1);