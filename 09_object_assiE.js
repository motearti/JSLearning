
let sbiBank={
    bankName: "SBI BANK",
    location:" Solapur",
    accountNo:123456,
    ifsc:   999999 ,
    interestRate:10,

 showDetails:function(){
    console.log(`bankName: ${this.bankName}, location :${this.location}, accountNo :${this.accountNo} , ifsc: ${this.ifsc} , interestRate : ${this.interestRate}`);
}
}
sbiBank. showDetails();


let axisBank={
    bankName: "AXIS BANK",
    location:"delhi ",
    accountNo:1234567,
    ifsc:   9999996 ,
    interestRate:9,

showDetails:function(){
    console.log(`bankName: ${this.bankName}, location :${this.location}, accountNo :${this.accountNo} , ifsc: ${this.ifsc},interestRate : ${this.interestRate}`);
}    
}
axisBank. showDetails();
        

let hdfcBank={
    bankName: "HDFC BANK",
    location:" pune",
    accountNo:12345678,
    ifsc:   9999998 ,
    interestRate:8,

showDetails:function(){
    console.log(`bankName: ${this.bankName}, location :${this.location}, accountNo :${this.accountNo} , ifsc: ${this.ifsc},interestRate : ${this.interestRate}`);
}    
}
hdfcBank. showDetails();
    
let yesBank={
    bankName: "YES BANK",
    location:"mumbai",
    accountNo:123456789,
    ifsc:   9999997 ,
    interestRate:6,
 showDetails:function(){
 console.log(`bankName: ${this.bankName}, location :${this.location}, accountNo :${this.accountNo} , ifsc: ${this.ifsc}, interestRate : ${this.interestRate}`);
 }    
 }
 yesBank. showDetails();


 //add object
 const arrayOfBanks=[sbiBank,axisBank,hdfcBank,yesBank];
 