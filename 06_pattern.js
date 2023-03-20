
console.log(" squre star pattern");
var n= 5;
var string =" ";


for (let index = 0; index < n; index++) {
  
    for (let j = 0; j < n ; j++) {
       string +=" * ";
        
    }
    string +=" \n ";
}
console.log(string);

console.log(" left triangle star pattern");
var n= 5;
var string =" ";


for (let index = 1; index <= n; index++) {
  
    for (let j = 0; j < index ; j++) {
       string +=" * ";
        
    }
    string +=" \n ";
}
console.log(string);

console.log(" pyramid star pattern");
var n= 5;
var string ="";


for (let index = 1; index <= n; index++) {
  
    for (let j = 1; j <= n- index ; j++) {
       string +=" ";
        
    }
    for (let k = 0; k < 2 * index -1 ; k++) {
        string +="*";
         
     }
    string +="\n";
}
console.log(string);