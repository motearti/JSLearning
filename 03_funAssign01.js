function fruitName(){
console.log("fruit name is: Apple");
}
fruitName();

function flowerName(){
    console.log("flower name is:Rose");
}
flowerName();

console.log("---------------------step2-----------------------");

var firstName="Arti";
var lastName="mote";
var collegeName ="Bmit,solapur";
function personalDetails ( firstName, lastName, collegeName){
console.log("my first name is: ",firstName);
console.log("my last name is:",lastName);
console.log("my college name is:",collegeName);
}
personalDetails ( firstName, lastName, collegeName);

console.log("---------------------------------step3---------------------------");
var name1= "virat";
var name2= 'anushka';

var num1=1000;
var num2=2000;

function swapValuesDude(value1, value2){
    
    console.log("before swap:", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("after swap:", value1, value2);

}
swapValuesDude(name1, name2);
console.log("------------------------------");
swapValuesDude(num1, num2);

console.log("----------------------------------step4-----------------------------");

function addThreeValues(value1, value2, value3) {
    var sum = value1+ value2 + value3 ;
    return sum;
  }
  var  sumResult= addThreeValues (10.23,600,40);
console.log(sumResult);

var  sumResult= addThreeValues(" Hello ", " Good ", " Morning ");
console.log(sumResult)

