

function Bank ( bankName,location ,ifscCode, branchCode){
    this.bankName=bankName
    this.location=location
    this.ifscCode=ifscCode
    this.branchCode=branchCode
    this.show =function(){
        console.log(`bankName: ${this.bankName},  location: ${this.location},  ifscCode: ${this.ifscCode},  branchCode: ${this.branchCode},`);
    }
}

Bank.prototype.openTime= "9 AM IST"
Bank.prototype.closeTime= "6 AM IST"

console.log(`----------------Bank Details---------------------------`);
const yesbank = new Bank("YES BANK","PUNE","YESS00000011", "YES0068");
yesbank.show();

const sbibank = new Bank("SBI Bank"," Solapur","SBI0000068", "SBI001");
sbibank.show();


const mahabank = new Bank("MAHARASTRA BANK","MAHAD","MAHA0000078", "MAHA00321");
mahabank.show();

const axisbank = new Bank("AXIS BANK","SANGOLA","AXIS00000678", "AXIS0089");
axisbank.show();

console.log(`-------------------protype object-------------------------`);
console.log(`open time:${sbibank.openTime} And close time :${sbibank.closeTime} of ${sbibank.bankName}`);

console.log(`bank name:${axisbank.bankName}, close Time:${axisbank.closeTime}`);

console.log(`bankName:${yesbank.bankName},  branchCode:${yesbank.branchCode}, open Time:${yesbank.openTime} `);