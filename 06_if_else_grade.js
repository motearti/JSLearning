console.log("****************vote eligibility******************");
function votEligibility (age){

if (age>=18 &&age<=120){
    console.log(`given ${age} is eligible for voting `);
}
 else if (age <=0 ||age>=120 ||age==undefined){
    console.log(`The given ${age}  data  is Invalid`);
}

else{
    console.log(`given ${age} is not eligible for voting`);
}

}
votEligibility(45);
votEligibility(17);
votEligibility(8);
votEligibility(20);
votEligibility(-10);
votEligibility(200);
votEligibility(0);
votEligibility(undefined);
votEligibility(null);
console.log("***********************************************marks************************");
function gradeCalculation(marks){


    // if marks is 0 or less than 0 or greater than 100 or not in valid number format 
    // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
    
    
    if(marks>=90){
        console.log(`fantastic marks :${marks} , your grade is A+`);
    }
    else if (marks>=75 && marks<90) {
        console.log(`Excellentmarks :${marks} ,your grade is A`);
    }
    else if(marks>=50 && marks<75){
        console.log(`Goodmarks :${marks} ,your grade is B`);
    }
    else if(marks>=35 && marks<50){
        console.log(`marks :${marks} ,your grade is c ,Need improvement`);
    }
     else if(marks=0 ||marks<0 ||marks>100){
        console.log(`Please provide valid marks `);
    }
     else if(marks="number"){
console.log(`enter valid no."${marks}"`);
     }
      else{
        console.log(`provide valid number `);
    }
    }
    gradeCalculation(98);
    gradeCalculation(91);
    gradeCalculation(90);
    gradeCalculation(0);
    gradeCalculation(150);
    gradeCalculation(-7);
    gradeCalculation(35);
    gradeCalculation(29);
    gradeCalculation(64);
    gradeCalculation(49);
    gradeCalculation("91");
    gradeCalculation("Seventy One");
   // gradeCalculation(NaN);// 
   // gradeCalculation(undefined);//
    //gradeCalculation(null);//
