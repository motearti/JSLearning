
const arrayRollNumbers =[113,45,56,11,32,45,109,799,56,45]

arrayRollNumbers.reverse();
console.log(`-------------------Reverse the array------------------------`);
console.log(arrayRollNumbers);

console.log(`------------ use the sort method as it is without any custom sorting logic --------------------`);
const sortedArray = arrayRollNumbers.sort();
console.log(sortedArray);

console.log(`-------------sort array in ascending order ,by writing custom logic-------------`);
arrayRollNumbers.sort ((a,b) => {
    return a>b ? 1 :-1 ;
    })
    console.log(arrayRollNumbers);

    console.log(`--------------Greast number from array----------------------`);
    const arraynum =arrayRollNumbers[arrayRollNumbers.length-1]
    console.log(arraynum);

    console.log(`--------------smallest number from array----------------------`);
    const arraySmallestNum =arrayRollNumbers[0]
    console.log(arraySmallestNum);

    console.log(`---------------------------------Remove duplicate from array----------------------------------`);
    const arrayOfUniqueElement= [...new Set(arrayRollNumbers)];

    console.log(arrayOfUniqueElement);
    