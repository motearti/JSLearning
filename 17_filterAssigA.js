
const arrayNumbers =[20,11,40,25,37,49,9,90,60,2,19];
const array=arrayNumbers.filter(element => element>50);
console.log(`---------num. greater than 50------------`);
console.log(array);

const array1=arrayNumbers.filter(element => element%2==0 );
console.log(`---------all the even numbers------------`);
console.log(array1);

const array2=arrayNumbers.filter(element => element%2!==0 );
console.log(`---------all the odd numbers------------`);
console.log(array2);

const array3=arrayNumbers.filter(element => element%5==0 );
console.log(`---------all the numbers multiple by 5------------`);
console.log(array3);

const array4=arrayNumbers.filter(element => element>=20 && element<=50 );
console.log(`---------all the numbers between 20 and 50------------`);
console.log(array4);