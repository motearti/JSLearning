
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

console.log(`---------------------------sort emp id in ascending order--------------------------`);
array_employees.sort((emp1, emp2) =>{
    return emp1. emp_id >emp2. emp_id ? 1 :-1 ;    
});
console.log(`----------after sort array----------------`);
array_employees.forEach( (employee) => {
    console.log(`emp id :${employee. emp_id}, Name :${employee. emp_name}, Dept :${employee. emp_dept}`);
});

console.log(`---------------------sort emp dept in ascending order-------------------------------`);
 array_employees.sort((employee1, employee2) =>{
    return(employee1. emp_dept >employee2. emp_dept ? 1 :-1 );
});

array_employees.forEach(employee => {
    console.log(`emp id :${employee. emp_id},  Dept :${employee. emp_dept},  company:${employee. emp_company}`);
});

console.log(`---------------------sort emp salary in descending order-------------------------------`);

const sortedArray = array_employees.sort((employee1, employee2) =>{
    return(employee1. emp_salary >employee2. emp_salary ? 1 :-1 );
});
sortedArray.reverse()
sortedArray.forEach(employee => {
    console.log(`emp name :${employee. emp_name},  salary :${employee. emp_salary}  company :${employee. emp_company},`);
});
