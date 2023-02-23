console.log("++++++++++++++++++++++++++++++==============assignment 3==================++++++++++++++++++++++++=");
function tcsEligibility( gradScore ,hscScore ,sscScore ,candidateName){
   var result =gradScore>=70 || hscScore >= 80 || sscScore>90 ?`Congrates "${candidateName}" you are eligible for tcs interview` :`Else Unfortunately " ${candidateName}" you are not eligible for interview`;
   console.log(result);
   console.log("==============================================================");
  
}
tcsEligibility(80,86,90,"Arti");
tcsEligibility(70, 65, 55,"dipak");
tcsEligibility(60, 79, 88, "santosh");

