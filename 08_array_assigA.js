
const arraySeasonalFruites = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`the given array is`);
console.log(arraySeasonalFruites);
const firstElement = arraySeasonalFruites[0];
console.log(`the first element is: ${firstElement}`);
const lastElement = arraySeasonalFruites[arraySeasonalFruites.length-1];
console.log(`the last element is:${lastElement}`);
console.log(`****************************************************************`);
arraySeasonalFruites.unshift("papaya");
console.log(`the papaya element add before banana the array is:`);
console.log(arraySeasonalFruites);
console.log(`****************************************************************`);
arraySeasonalFruites.splice(4,1);
console.log(`removing mango the array is:`);
console.log(arraySeasonalFruites);
console.log(`****************************************************************`);
arraySeasonalFruites.push("Pineapple")
console.log(`adding element 'pineapple' at the last position: `);
console.log(arraySeasonalFruites);
console.log(`****************************************************************`);
arraySeasonalFruites.splice(4,0,"Dragon Fruit");
console.log(`insert element "Dragon Fruit" before Watermelon the array is:`);
console.log(arraySeasonalFruites);
console.log(`****************************************************************`);
arraySeasonalFruites.splice(2,1,"Kiwi")
console.log(`Replace an element 'orange' with 'Kiwi' the array is:`);
console.log(arraySeasonalFruites);
console.log(`****************************************************************`);
const subArray= arraySeasonalFruites.slice(1,5);
console.log(`the elements starting from index 1 to 4 the aaray is:`);
console.log(subArray);
console.log(`****************************************************************`);
const lastThreeNum3= arraySeasonalFruites[arraySeasonalFruites.length-3];
const lastThreeNum2= arraySeasonalFruites[arraySeasonalFruites.length-2];
const lastThreeNum1= arraySeasonalFruites[arraySeasonalFruites.length-1];
console.log(`last 3 elements is:${lastThreeNum3} ,${lastThreeNum2} ,${lastThreeNum1}`);









