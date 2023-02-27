console.log('start');
var num=10;
if (num>0) {
    console.log('inside if');
    console.log(`Number is positive ${num}`);

}
console.log('End');

console.log("****************************************");

var ageForVote=10;
if (ageForVote >= 18){
console.log("you are eligible for voting");
console.log(`age is : ${ageForVote}`);
}
console.log("end of next if block");

console.log("****************************************");
function checkEvenOdd(num) {

    if(num%2 ==0){
        return "Even";
    }
    if(num%2 !=0){
        return "ODD"
    }
}
var result = checkEvenOdd(45);
console.log(`given number is:${result}`);

var result = checkEvenOdd(70);
console.log(`given number is:${result}`);

console.log("****************************************");
var num1 = 5;
if(num1>0){

    console.log(`number ${num1} is positive`);
}
else{
    console.log(`number ${num1} is negative`);
}

console.log("****************************************");

function maleMarriageEligible(gender ,age ,boyName){
    if (gender=="male" && age>=21){
        console.log(`${boyName} you are eligible for marriage`);
    }
    else{
        console.log("not elligible");
    }
}
maleMarriageEligible("male",25,"billgates");
maleMarriageEligible("male",17,"stew jobs");