console.log("======================if else block==========================================");
function isEvenOddNum(num){

    if (num%2==0){
        console.log(`the number "${num}" is : Even`);
    }
    else{
        console.log(`the number "${num}" is : Odd`);
    }
}
isEvenOddNum(66);
isEvenOddNum(87);
isEvenOddNum(78);
console.log("**********************************************");
function votingEligibility(age , name){

    if(age>=18){
        console.log(`${name} your age "${age}" is eligible for voting`);
    }
    else{
        console.log(`${name} your age "${age}" is not eligible for voting`);
    }
}
votingEligibility(25 , "dipak");
votingEligibility(16 ,"santosh");
votingEligibility(24 ,"pooja");
votingEligibility(18 ,"anushka");
console.log("****************************************************");
function charNumber(string){
   
   result =string.split("");
 // console.log(result.length);
  if(result.length>15){
    console.log(`the string "${string}" is having more than 15 charactor`);
   }
   else{
    console.log(`the string "${string}" is having less charactor`);
   }
}
charNumber("I am Angular Developer");
charNumber("javascript-ES6")