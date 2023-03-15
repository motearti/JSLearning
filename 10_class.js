
class Bank {
constructor(bankname,location, account,ifsc, interestRate){

    this.bankname=bankname;
    this.location=location;
    this.account=account;
    this.ifsc=ifsc;
    this.interestRate=interestRate;
}
showDetails(){
    console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
}
}
const sbiBank= new Bank("SBI BANK"," Solapur",123456, 999999 ,10);
//console.log(sbiBank);
sbiBank.showDetails();

const axisBank= new Bank("AXIS BANK"," PUNE",1234567, 9999998 ,9);
console.log(axisBank);

//class naming use first letter capital
class Person{
    fullName
    city
    constructor(fullName,city){
        this.fullName=fullName;
        this.city=city;
    }
    
    }
    const personDhoni = new Person("MS Dhoni", "Ranchi");
    const personShubham = new Person("Shubham Gill", "Mumbai");
    
    //instanceOf operator object present in class
    console.log(personDhoni instanceof Person);
    console.log(personShubham instanceof Bank);
    console.log(sbiBank instanceof Bank);