
const bankSbi={
    bankName: "SBI Bank",
    location:"solapur",
    account: 62514897564,
    ifsc: "SBIN0004598",
}
console.log(`------------step1------------------------------`);
console.log(bankSbi);
const bankLocation ={
    street:"mahaveer chowk",
    city:"Pune",
    pinCode:413213

}
console.log(`-----------------------step2--------------------------`);
console.log(bankLocation);
console.log(`----------------------cloning using object.assign()-----------------------------------`);
const newObject ={};
Object.assign(newObject, bankSbi,bankLocation);
console.table(newObject);

console.log(`----------------------cloning using spread operator--------------------------------------`);
const cloneObject = {...bankSbi, ...bankLocation};
console.log(cloneObject);

const rateOfInterest ={
    homeLoanInterest: 10,
    personalLoanInterest: 25 ,
    dueInterest: 9,
}
console.log(`----------------------step4--------------------------------------`);
console.log(rateOfInterest);

console.log(`----------------merge step1, step2 and step4---------------------`);
const sbiDetails={};
Object.assign(sbiDetails, bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);

console.log(`----------------------traversing sbiDetails object---------------------------------`);
function traverseObject(sbiDetailsObject){
for (const key in sbiDetailsObject ) {
    if (Object.hasOwnProperty.call(sbiDetailsObject, key)) {
        const element = sbiDetailsObject[key];
        console.log(`${key}: ${element}`);
    }
}

}
traverseObject(sbiDetails);