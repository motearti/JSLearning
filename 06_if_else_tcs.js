function tcsInterviewEligible (gradScore ,hscScore ,sscScore ,candidateName){
    if(gradScore>=70 || hscScore>=80 || sscScore>90){
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
    
    }
    else{
        console.log(`Unfortunately ${candidateName} you are not eligible for interview`);
    }
}
tcsInterviewEligible(80 ,86,90,"Arti");
tcsInterviewEligible(70 ,65,55,"Reshma");
tcsInterviewEligible(60,79,88,"Pravin");

if ()