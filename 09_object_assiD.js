let professor = {
  name: "Dipak Vhate",
  subject: "civil",
  age: 27,
  id: 1234,
  city: "pune",
  degrees: {
    engineering: "CSC",
    PHD: "Adv Computing",
  },
  certificates: [
    "Hacker Rank Participation",
    "Certificates in IFE cource",
    "Certificate in Adv Programming",
  ],
  allDegrees: function () {
    return ` ${this.degrees.engineering}, ${this.degrees.PHD}`;
  },
};
console.log(`================================step1===============================`);

console.log(professor);
console.log(`================================step2===============================`);

console.log(professor.degrees);
console.log(`================================step3===============================`);

console.log(professor.certificates);
console.log(`================================step4===============================`);

let result = professor.allDegrees();
console.log(`Teachers degrees are : ${result}`);
console.log(`Total degrees are :${result.split(",").length}`);
console.log(`================================step5===============================`);

professor.totalExperience = "14 years";
console.log(`Total Experience is :${ professor.totalExperience}`);
console.log(`================================step6===============================`);

professor.age=30;
console.log("Modify age property :",professor);
console.log(`================================step7===============================`);

professor. certificates.push("Oracle Certified");
console.log(`add one new certificate`);
console.log(professor.certificates);
console.log(`================================step8===============================`);

const last =professor.certificates[professor.certificates.length-1]
console.log(`The last element of array certificates is :${last}`);
console.log(`===============================================================`);