

const employee ={
    id: 124567,
   name: "Elon Musk",
   country : "US",
   city: "Silicon Valley"
}

console.log("==== in operator =====");
 const isIdAvailable = "id" in employee;
 console.log(isIdAvailable);

console.log(`=====================object traversing===============`);
//const array=[];
for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);
    }
}
const keyOfEmployee=Object.keys(employee)
console.log(keyOfEmployee);

const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);

const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee);


const player = {
    fullName: "Virat Kohli",
    totalCenturies : 46,
    isMarries: true
}
//Object.freeze(player);
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed
delete player.totalCenturies;// deleting property - Not allowed as object is freezed
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed
console.log(player);

const student = {
    firstName: "Elon",
    lastName: "Musk",
    age: 54
} 
const address = {
    country : "US",
    city : "Silicon Valley",
    PIN: "QA2345"
}

//for merge object
// First way 
const mergedObject = Object.assign({}, student, address);
console.table(mergedObject);

// Second way 
const newObject = {};
Object.assign(newObject, student, address);
console.table(newObject);

//  Third way
Object.assign(student, address);
console.table(student);

//  Fourth way
Object.assign(address, student);
console.table(address);

//freeze object
Object.freeze(address);
