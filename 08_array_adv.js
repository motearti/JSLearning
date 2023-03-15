
const arrayOfNames= ["Anil","Sunil","Sita","Bill","Elon"];
const result = arrayOfNames.join(":");//use string seperator :,||,|
console.log(result);
console.log(typeof result);

console.log(arrayOfNames.length); 
console.log("Resize an array"); 
arrayOfNames.length = 3; 
console.log(arrayOfNames.length);
 console.log(arrayOfNames); 
 arrayOfNames.length = 7; 
 console.table(arrayOfNames);

 const array = [3, 4, 5, 6, 7, 2, 4, 5]; 
 const setOfElements = new Set();
  for (const element of array) {
     setOfElements.add(element); 
}
 // console.table(setOfElements);
 const mySet = new Set(array);
  const arrayOfUniqueElements = [...mySet];
  //console.log(mySet);
  console.table(mySet);
  /*or
  const arrayOfUniqueElements = [...new Set(array)];
  console.log(arrayOfUniqueElements);*/

