
class Employee {
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;

    }
}
const emp_anil =new Employee (22,"Anil" ,"IT", 50000,"TCS");
const emp_radha =new Employee (33,"Radha" ,"Hr", 74000,"wipro");
const emp_rishi =new Employee (55,"Rishi" ,"Finance", 47000,"TCS");
const emp_sonali =new Employee (66,"Sonali" ,"Finance", 45000,"Infy");
const emp_monika =new Employee (77,"Monika" ,"IT", 40000,"wipro");
const emp_viny =new Employee (88,"Vinayak" ,"IT",75000,"TCS");
const emp_mahi =new Employee (99,"Mahesh" ,"Hr", 85000,"Infy");

let array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`----------employee name working in TCS company-------------`);

array_employees.filter((employee)  =>{
    
    if(employee.emp_company=="TCS"){
        console.log(`emp Name: ${employee.emp_name},   emp company:${employee.emp_company}`);
    }
});


console.log(`----------average salary of employee from wipro-------------`);

const arrayOfWipro = array_employees.filter( (employee) =>{
return employee.emp_company =="wipro";
});

const totalSalary =arrayOfWipro.reduce ( (runningTotal ,element) =>{
    return runningTotal + element.emp_salary;
},0);
console.log(totalSalary / arrayOfWipro.length);

arrayOfWipro.forEach ( (employee) => {
    console.log(employee);
});

console.log(`----------average salary of employee from wipro and infy-------------`);

const arrayOfWiproInfy = array_employees.filter( (employee) =>{
    return employee.emp_company =="wipro" ||  employee.emp_company =="Infy" ;
    });
    
    const totalSalaryOf =arrayOfWiproInfy.reduce ( (runningTotal ,element) =>{
        return runningTotal + element.emp_salary;
    },0);
    console.log(totalSalaryOf / arrayOfWiproInfy.length);
    
    arrayOfWipro.forEach ( (employee) => {
        console.log(employee);
    });






/*let sum=0
let average2;
let array=[];
array_employees.filter((employee) =>{

   if(employee.emp_company=="wipro"){
    array.push(employee)
    sum= sum+employee.emp_salary
}
average2 = sum/array.length
});
 console.log(`Total salary:${sum}`);
console.log(`the average salary of wipro  :${average2}`)


console.log(`----------average salary of employee from wipro and infy-------------`);
let sumof=0
let average1;
let array2 =[];
 array_employees.filter((employee) =>{
let char =employee.emp_company;
   if( char=="wipro"||  char=="Infy"){
    array2.push(employee)
    sumof= sumof+employee.emp_salary
}

average1 = sumof/array2.length


}); console.log(`Total salary :${sumof}`);
console.log(`the average salary of wipro and infy is :${average1}`)
*/