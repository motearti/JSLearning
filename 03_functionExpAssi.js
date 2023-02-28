console.log("*******************Leap Year*****************************");
function checkLeapYear(leapYear) {
    if( leapYear=="number" ||leapYear===null || leapYear==undefined || isNaN(leapYear) ){
        console.log(`Invalid Data "${leapYear}": provide valid data`);
    } 
  else if(leapYear%4===0 && (leapYear%100!=0 || leapYear%400===0)) {
    console.log(`given ${leapYear} is Leap Year`);
  }
  else {
    console.log(`given ${leapYear} is Not Leap Year`);
   } 
 }

checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(undefined);
checkLeapYear(2000);
checkLeapYear(1600);
checkLeapYear("Twenty Twenty");
checkLeapYear(1750);
checkLeapYear(NaN);
checkLeapYear(null)