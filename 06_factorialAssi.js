

function factorialOfNum(num){//5

    var factorial=num;
    for (let index =num-1 ; index >=1; index--) {//5
      var num= num*index;
      if(num=undefined || num==null || isNaN(num)){
        console.log(`Inavalid data ${num}`);
      }
        factorial= factorial*index;

    }
    return factorial;
}
var factorial = factorialOfNum(5);
console.log(`The Factorial of number 5 is  :`,factorial);

var factorial1 = factorialOfNum(3);
console.log(`The Factorial of number 3 is :`,factorial1);

var factorial2 = factorialOfNum(null);
console.log(`The Factorial of number null is :`,factorial2);

var factorial3 = factorialOfNum(8);
console.log(`The Factorial of number 8 is :`,factorial3);

var factorial4 = factorialOfNum(undefined);
console.log(`The Factorial of number undefined is :`,factorial4);

var factorial5 = factorialOfNum(9);
console.log(`The Factorial of number 9 is :`,factorial5);

var factorial4 = factorialOfNum(NaN);
console.log(`The Factorial of number NaN is :`,factorial4);





