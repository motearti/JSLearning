var num1 = 100;
var num2 = 200;

var str1 = "sweety";
var str2 ="cutie"

function swapVariable(value1, value2) {
  //var value1=num1,var value2=num2
  console.log("before swap:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("after swap:", value1, value2);
}
swapVariable(num1, num2); //function call or function invoke
swapVariable(str1 ,str2);

console.log("===================================================================");

//1. function with no argument and no return value    )
function showFullName() {
  console.log("my full name is:arti mote");
}
showFullName(); //function call

console.log("====================================================================");

//2 .function with arguments and no return value     )
function showAge(age) {
  console.log("my age is:", age);
}
showAge(32);//function call
showAge(24);
console.log("==================================================================");

//3. function with no arguments and  return value     )
function fullName() {
  var name = "arti mote";
  return name;
}
var result = fullName();
console.log(result);

console.log("=======================================================");

//4. function with arguments and return value
function sumOfNumbers(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return sum;
}
var sumResult = sumOfNumbers(10, 45, 79);
console.log(sumResult);

console.log("=============================================================================");
var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1 = "billgates";
var name2 = "Stew jobs";
function swapVariable(value1, value2) {
  console.log("Before Swap: ", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap: ", value1, value2);
  console.log("=======================================");
  return "Swapping variables successfully completed";
}

var swapResult = swapVariable(num1, num2); // Function call or Function invoke
console.log(swapResult);

var swapResult2 = swapVariable(str1, str2);
console.log(swapResult2);

var swapResult3 = swapVariable( name1 ,name2);
console.log(swapResult3);
