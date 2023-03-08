
//Object literals
let student={
firstName :"Arti",
lastName :"Mote",
isWorking:true,
age:23,
collegeName:"ABC",



}
console.log(student);
console.log(typeof student);
// . dot notation
console.log(student.firstName);
console.log(student.age);//access property
// [] notation
console.log(student["lastName"]);

//update property
let collegeName="ABC";
  collegeName="COEP PUNE";//


//add new property 
student.city="Mumbai";
console.table(student);

student.country="India"
console.table(student);

//delete property
delete student.isWorking ;
console.table(student);

//Empty object
let teacher ={ };
teacher.firstName = "Mohit"
console.log(teacher);