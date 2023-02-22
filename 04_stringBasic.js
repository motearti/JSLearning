console.log("------------------------------##############-------------------");
function stringName(){

    var name = "my dream company is: TCS";
    return name;
  }
  var fName = stringName();
  console.log(fName);

  console.log("---------total numbers of characters available in ----------");
var hobby1= " Travelling ";
var hobby2= "  Pencil sketching  ";
var hobby3= " Reading ";
function stringBasics(hobby1 , hobby2 , hobby3 ) {
    console.log("My hobbies are:", hobby1 , hobby2 , hobby3);
   
}
stringBasics(hobby1 ,hobby2,hobby3);


var hobby1Length = hobby1.length;
console.log("total numbers of characters in hobby1:", hobby1Length );

var hobby2Length = hobby2.length;
console.log("total numbers of characters in hobby2:",hobby2Length);

var hobby3Length =  hobby3.length;
console.log("total numbers of characters in hobby2:",hobby3Length);

var hobbyLength= hobby1.length+ hobby2.length+ hobby3.length;
console.log("sum of total number of character  available in hobby:",hobbyLength);

