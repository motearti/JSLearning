function factorialOfWordCount(string) { 
      

    if (string == null || string == undefined || (isNaN(string) && typeof string=="number")) {
      console.log(`invalid data ${string}: please provide valid data`);
  }
  else{
   console.log(`Given string is "${string}" `);
    let words =string.split(" ");
    const totalWords= words.length;
    console.log(`The count of Total words in string is :${totalWords}`);
    let factorial=1;
    for (let index = totalWords; index >=1; index--) {
     factorial=index * factorial;
      
    }
    console.log(`The factorial of string '${totalWords}' is:${factorial}`);
    console.log(`---------------------------------------------`);
  }

  }
   

factorialOfWordCount("Arti Rama Mote");
factorialOfWordCount("Revision is the mother of Success");
factorialOfWordCount("");
factorialOfWordCount("We never fail ,we always learn");
factorialOfWordCount(undefined);
factorialOfWordCount(null);
factorialOfWordCount(NaN);


 