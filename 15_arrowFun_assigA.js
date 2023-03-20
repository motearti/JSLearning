
console.log(`-----function with no args and no return value--------`);
let show =() => {
    console.log(`Good Morning, Today is Monday`);
}

show();

console.log(`--------function with 3 args and no return value, perform multiplication-------`);
let multiplication = (value1 ,value2, value3=1) => {
let multiply =value1*value2*value3;
console.log(`the multiplication of ${value1}*${value2}*${value3} is:${multiply}`);
}

multiplication(5,5,2);
multiplication(10,4);

console.log(`--------function with 5 args and return value, perform addition-------`);
let addition = (value1 ,value2 ,value3 ,value4 ,value5) => {
const add = value1 +value2 +value3 +value4 +value5
return add;
}
let result = addition(100,100,200,349,756);
console.log(`the addition of num is :${result}`);

let result1 = addition("I Am ","learning ", "ES6 ","features ", "in depth");
console.log(`the addition  is :${result1}`);