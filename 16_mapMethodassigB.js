
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

console.log(`---------------the list of all employee names--------------`);
const array = array_employees.map ( (element) => {
    return element.emp_name;
});
console.log(array);

console.log(`---------the list of department--------------`);
const array2 = array_employees.map ( (element) => {
    return element.emp_dept;
});
console.log(array2);

console.log(`---------the list of employee id--------------`);
const array3 = array_employees.map ( (element) => {
    return element.emp_id;
});
console.log(array3);

console.log(`---------the list of employee name--------------`);

const array4 = array_employees.map ( (element) => {
    
   if(element.emp_company =="TCS")  {
  console.log(element.emp_name);
   } 
});
