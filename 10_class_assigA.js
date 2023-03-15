console.log(`-------------------------*******step1. vehicles*******---------------------`);
class Vehicle {
    company
    color
    engine
    milage
    price
    constructor(company,color,engine,milage,price){
        this.company=company;
        this.color=color;
        this.engine=engine;
        this.milage=milage;
        this.price=price;
    }

}
const seltose = new Vehicle("Seltose","Black","Petrol",20,1000000);
console.log(seltose);

const scarpio = new Vehicle("Scarpio","White","diesel",15,1800000);
console.log(scarpio);

const Hondacity = new Vehicle("Hondacity","Grey","petrol",16,1500000);
console.log(Hondacity);

const breza = new Vehicle("Breza","Red","diesel",24,1600000);
console.log(breza);

const harrier = new Vehicle("Harrier","Blue","diesel",15,1900000);
console.log(harrier);

console.log(`-------------------------*******step2. college*******---------------------`);

class college {
    Name
    city
    course
    id
    students
    constructor (Name,city,course,id,students){
        this.Name=Name;
        this.city=city;
        this.course=course;
        this.id=id;
        this.students=students;
    }
   
}

const Bmit = new college ("BMIT","Solapur","BE",85201,3000);
console.log(Bmit);

const sighgad = new college ("Sighgad","Pune","BSC",12345,2000);
console.log(sighgad);

const Febtech = new college ("Fabtech","Sangola","BEd",85201,5000);
console.log(Febtech);

const Sevasadan = new college ("Sevasadan","Satara","MSC",20168,1000);
console.log(Sevasadan);

const Walchand = new college ("Walchand","Solapur","BE",95201,6000);
console.log(Walchand);

console.log(`-------------------------*******step3.traverse object college*******---------------------`);

const arrayOfCollege = [Bmit,sighgad,Febtech,Sevasadan,Walchand];
//for of loop

for (const element of arrayOfCollege ) {
    console.log(`${element.Name},${element.city},${element.course},${element.id},${element.students}`);
} 

console.log(`--------------traversing-----------------------`);
function traverseObject(collegeObject){
for (const key in collegeObject) {
    if (Object.hasOwnProperty.call(collegeObject, key)) {
        const element = collegeObject[key];
        console.log(`object key value is: ${key}:${element}`);
    }
}
}
traverseObject(Bmit);



console.log(`-------------------------*******step4.prime no.*******---------------------`);
function primeNumber(num){
for (let index = 2; index <num; index++) {
        if(num%index ==0){
           return `the given number${num} is not prime`;//false
        }
        }
     return `the given number${num} is prime`;//true
    }
    
let result=primeNumber(11);
console.log(result);

let result1=primeNumber(21);
console.log(result1);
