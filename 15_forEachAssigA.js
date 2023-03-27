
const arrayNumbers =[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`----------array element with its index using forEach()--------`);

arrayNumbers .forEach((element, index)  => {
    console.log(`element ${element},  index ${index}`);
});

console.log(`----------------------positive numbers--------------------`);

let array =[];
arrayNumbers.forEach(element => {
    if(element>=0){
        array.push(element)
    }
   
});
console.log(array);

console.log(`----------------------negative numbers--------------------`);
let arrayNegative= [];
 arrayNumbers.forEach(element => {
    if (element<0) {
        arrayNegative.push(element)
    }
});
console.log(arrayNegative);

console.log(`----------------------Even numbers--------------------`);
let arrayEven =[];
 arrayNumbers.forEach(element => {
    if (element%2==0) {
        arrayEven.push(element);
    }
});
console.log(arrayEven);

console.log(`----------------------sum of all elements--------------------`);
let sum= 0;
arrayNumbers.forEach(element => {
    sum= sum+element;
});
console.log(sum);

console.log(`----------------------even indexed elements--------------------`);
let arrayevenIndex=[];
arrayNumbers.forEach(element => {
    let num=arrayNumbers.indexOf(element);
    if(num%2==0){
    arrayevenIndex.push(element);
    }
});
console.log(arrayevenIndex);

