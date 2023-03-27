

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

console.log(`--------------------employees working in 'TCS'---------------------------`);
array_employees.forEach(element => {
    if(element.emp_company=="TCS"){
        console.log(`emp_Name:${element.emp_name},  emp_company:${element.emp_company}`);
    }
});

console.log(`--------------employees salary greater than equal to 50000---------------------`);
array_employees.forEach(element => {
    if (element.emp_salary>=50000) {
        console.log(`emp_id:${element.emp_id},  emp_Name:${element.emp_name},  emp_departement:${element.emp_dept},  emp_salary:${element.emp_salary},  emp_company:${element.emp_company}`);
    }
});

console.log(`--------------sum of all employees salary ---------------------`);
let sum = 0;
array_employees.forEach(element => {
    sum =sum +element.emp_salary
});
console.log(`sum of all salary :${sum}`);
console.log(`no. of employee :${array_employees.length}`);

console.log(`--------------average of employees salary ---------------------`);
console.log(`Average of salary :${sum /array_employees.length}`);


console.log(`----------------------IT or HR dept emp salary >=75000`);
array_employees.forEach(element => {
    if (element.emp_dept=="TCS"|| "HR" && element.emp_salary>=75000) {
        console.log(`emp_id:${element.emp_id},  emp_Name:${element.emp_name},  emp_departement:${element.emp_dept},  emp_salary:${element.emp_salary},  emp_company:${element.emp_company}`);
    }
});