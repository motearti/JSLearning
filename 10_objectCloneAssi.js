
const arrayNums = [20, 3, 4,56,90, 400,49]
console.log(`--------------------step1--------------------------`);
const newArray = arrayNums;
newArray.push(55,56)
console.log(`original array :${arrayNums}`);
console.log(`cloned array:${newArray}`);

console.log(`----------------------------step2---------------------------`);
const clonedArray = [...arrayNums];
clonedArray.push(10,25)
console.log(`original array :${arrayNums}`);
console.log(`cloned array using spread operator:${clonedArray}`);

console.log(`------------------------------step3---------------------------------`);
const arrayEven =[2,30,14,8];
const mergeArray=arrayEven.concat(...arrayNums);
console.log(`merge array: ${mergeArray}`);

console.log(`-----------------------step4----------------------------------------`);
const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"

    },
    address:{
        locality:{
            colony:"OM Vrindavan society",
            street:"Kanch Pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharastre",
        country:"India"
    },
    mobiles: ["+91 8600 3456 88", "1800 4567 32", "+91 9096 5678 77"]
}

console.log(employee_info.address.locality);
console.log(`city: ${employee_info.address.city} ,state: ${employee_info.address.state} , country: ${employee_info.address.country}`);
console.log(employee_info.mobiles);

console.log(`---------------------------step6-----------------------------------`);
const newObject = JSON.parse(JSON.stringify(employee_info));
newObject. salary.july_month= "80K";
console.log(` original object salary:${employee_info.salary.july_month}`);
console.log(`a) update property 'july_month' salary: ${newObject.salary.july_month}`);

const newCountry = JSON.parse(JSON.stringify(employee_info));
newCountry.address.country="United Kingdom";
console.log(` original object country: ${employee_info.address.country}`);
console.log(`b) update property country: ${newCountry.address.country}`);
