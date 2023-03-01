//Function Expression
//var name to the function
//no return value
var show = function(args){
    console.log('Hi Good Morning');
}
show();  //call function


console.log(typeof show);
// FE - Function expression
//with return value
var sum = function(arg1, arg2){
    console.log(arg1 + arg2);
    return arg1*arg2;
}
var result = sum(100, 100);
console.log(result);