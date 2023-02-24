console.log("====================================Assignment2=======================================");
function maleMarriageEligibility(gender ,age ,boyName){
    var result = (gender ="male" && age>= 21) ?`Hey "${boyName}" you are eligible for marriage` : `Sorry "${boyName}"  not eligible for marriage`;
    console.log(result);
    return result;
}
maleMarriageEligibility(" Male ", 25 ,"Billgates");
maleMarriageEligibility(" Male ", 17 ,"stew jobs");

console.log("==================================step2================================");
function femaleMarriageEligibility (gender, age ,girlName){
    var result = (gender ="female" && age>= 18) ?`Hey "${girlName}" you are eligible for marriage` : `Sorry "${girlName}"  not eligible for marriage`;
    console.log(result);
    return result;

}
femaleMarriageEligibility("Female" ,16 ,"jenifer");
femaleMarriageEligibility("female" , 27 ,"Malinda Gates");
