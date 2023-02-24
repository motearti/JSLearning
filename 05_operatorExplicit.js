//Explicit conversion : convert number string and boolean values to numbers,
//in that case we can use Number()

//string to number
let result;
result = Number ('324');
console.log(result); // 324

result = Number ('324e - 1');
console.log(result); // 32.4

//boolean to number

result = Number (true);
console.log(result); // 1

result = Number (false);
console.log(result); // 0

//Explicit conversion : invalid string to number return NaN
//if string invalid number , the result will be NaN
let result1;
result = Number ('hello');
console.log(result); // NaN

result = Number (undefined);
console.log(result); // NaN

result = Number (NaN);
console.log(result); // NaN

//Explicit conversion : string to number  using + oprator

var numberInString = "100";
console.log(typeof numberInString);

var mynumber = +numberInString
console.log(typeof mynumber);

//number to string data type conversion using toString() method

var mynumber = "100";
console.log(typeof mynumber); //number

var aftreconversion = mynumber.toString();
console.log(typeof aftreconversion); //string




