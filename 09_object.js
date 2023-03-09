
//Object literals
let student={
firstName :"Arti",
lastName :"Mote",
isWorking:true,
age:23,
collegeName:"ABC",
id:123456,
address:{
  street:"wakad",
  city:"pune",
  PIN:"431204"
},              // add use , i.e.property
school: "Podar School",
friends:["Bill","stew","Elon" ],
show: function(){
  console.log("I am show() function");
},

addressDetails: function(){
    return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`;
 }//concate all
};
let resultaddress=student. addressDetails()
console.log(resultaddress);

student.show();//call function



console.log(student.friends);
console.log(student.friends[student. friends.length-1]);//last word
student. address. PIN="431205"//update

console.log(student.address.city);//access city

student. marks={
  math:80,
  physics:60,
  drawing:70
}
console.log(student.marks);

console.log(student. id);//typeof
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