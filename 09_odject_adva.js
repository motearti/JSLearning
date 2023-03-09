

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