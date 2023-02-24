//implicit conversion to string

//numeric string used with + gives string type
let result;

result = '3' +2;
console.log(result ); //"32"

result = '3' + true;
console.log(result ); //"3true"

result = '3' + undefined;
console.log(result ); //"3undefined"

result = '3' + null;
console.log(result ); //"3null"
console.log("====================================================");
//implicit boolean conversion to number
//if boolean is used, true is 1, false is 0

let result1; 

result = '4' - 2;
console.log(result ); // 2

result = '4' + true;
console.log(result ); // 5

result = '4' + false;
console.log(result ); // 4

console.log("======================================================");
//implicit string conversion to number
//numric string used with - ,/ ,*  result number type
let result2;

result = '4' - 2;
console.log(result ); // 2

result = '4' - 2;
console.log(result ); // 2

result = '4' * 2;
console.log(result ); // 8

result = '4' / 2;
console.log(result ); // 2

//undefined used with number, boolean or null given NaN
//arithmatic operation of undefined with number , boolean or null gives NaN

let result3;

result = '4' + undefined;
console.log(result ); // NaN

result = '4' - undefined;
console.log(result ); // NaN

result = true + undefined;
console.log(result ); // NaN

result = null + undefined;
console.log(result ); // NaN

