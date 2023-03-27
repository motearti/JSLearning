console.log(`--------------------------step1----------------`);
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array :${arrayNumbers}`);
console.log(`Total elements available is: ${arrayNumbers.length}`);

console.log(`----------------------------step2--------------------`);
let firstElement = arrayNumbers[0];
console.log(`the first element is: ${firstElement}`);

let lastElement = arrayNumbers[arrayNumbers.length - 1];
console.log(`the last element is: ${lastElement}`);
console.log(`-------------------------step3-------------------------`);

let thirdLastElement = arrayNumbers[arrayNumbers.length - 3];
console.log(`the third last element is: ${thirdLastElement}`);
console.log(`--------------------------step4-------------------------`);
let even=[];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element=arrayNumbers[index]
  if (element%2==0) {
    even.push(element);
  }
  
}
console.log(`all the even numbers in array: ${even}`);
console.log(`----------------------------------step5-----------------------------`);
let odd=[];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element=arrayNumbers[index]
  if(element %2 !==0){
    odd.push(element) ;
  }

  }
   console.log(`all the odd numbers is: ${odd}`);

console.log(`---------------------------step6-----------------------`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (index % 2 == 0) {
    sum = sum + element;
  }
}
console.log(`sum of all even positioned element is: ${sum}`);
console.log(`------------------------------------step7----------------------`);
let sumodd = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];

  if (index % 2 !== 0) {
    sumodd = sumodd + element;
  }
}
console.log(`sum of all odd positioned element is: ${sumodd}`);
console.log(`-----------------------------------step8-------------------------`  );
let sumof = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  sumof = sumof + element;
}
console.log(`the sum of all elements is: ${sumof}`);

console.log(`--------------------step9----------------------------`);
let multiple=[]
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 5 == 0) {
    multiple.push(arrayNumbers[index])
  }
}
console.log(`the numbers multiple by 5 : ${multiple}`);
console.log(`-----------------------------------step10--------------------`);
var available115 = arrayNumbers.includes(115);
console.log(`is number 115 available in array: ${available115}`);

console.log(`-------------------------------------step11---------------------`);
var available23 = arrayNumbers.includes(23);
console.log(`is number 23 available in array: ${available23}`);

console.log(`-----------------------------------step12-----------------------`);
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
 arrayNumbers.splice(3,0,55,66);
console.log(`insert 55,66 no. before index 3 : ${arrayNumbers}`);

console.log(`-----------------------------------step13-----------------------`);
arrayNumbers.splice(4,3)
console.log(`delete 3 element from index 4 : ${arrayNumbers}`);




