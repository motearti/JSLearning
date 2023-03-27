
const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19];

let array = arrayNumbers.map( (element) =>{
   return  element+10;
});
console.log(`-----------add 10 into each element-----------`);
console.log(array);

console.log(`-------------square the each element-----------`);
let array2 =arrayNumbers.map( (element) =>{
    return element**2;
}
);console.log(array2);

console.log(`-------------add the index value into corresponding each array element-----------`);
let sumof= [];
let array3 =arrayNumbers.map( (element,index) =>{

   let sum =element+index
   sumof.push(sum)
   return sumof
}
);console.log(sumof);

