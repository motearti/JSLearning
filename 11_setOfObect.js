
class Bank {
    constructor(bankName, location, account, ifsc, interestRate) {
      this.bankName = bankName;
      this.location = location;
      this.account = account;
      this.ifsc = ifsc;
      this.interestRate = interestRate;
    }
  }
  const sbiBank = new Bank("SBI Bank","Wakad","62514897564", "SBIN0004598",10.75);
  const axisBank = new Bank("Axis Bank","Bajirao Road, Pune","4597863258","AXIS4567893",10.5);
  const yesBank = new Bank( "Yes Bank","Mumbai","62514897564","YES0004598",14.75 );
  const hdfcBank = new Bank("HDFC Bank","Surat","62514897564","HDFC0004598", 9.75);
  

const setOfBank =new Set();
setOfBank.add( sbiBank);
setOfBank.add( axisBank);
setOfBank.add(yesBank);
setOfBank.add( hdfcBank);

for (const bank of setOfBank) {
    console.log(bank.bankName);
}