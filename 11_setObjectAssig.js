

class Bank {
    constructor(bankName, location, account, ifsc, interestRate) {
      this.bankName = bankName;
      this.location = location;
      this.account = account;
      this.ifsc = ifsc;
      this.interestRate = interestRate;
    }
  }
 
  const axisBank = new Bank("Axis Bank","Pune","4597863258","AXIS4567893",10.5);
  const sbiBank = new Bank("SBI Bank","Wakad","62514897564", "SBIN0004598",10.75);
  const iciciBank = new Bank( "ICICI Bank","Mumbai","62514897564","ICICI0004598",14.75 );
  const kotakBank = new Bank("KOTAK Bank","Pune","62514897564", "KOTAK0006998",10.75);
  const hdfcBank = new Bank("HDFC Bank","Surat","62514897564","HDFC0004535", 9.75);
  const panjabBank = new Bank("PUNJAB Bank","Sangola","62514897564", "PUNJAB000598",10.75);


  const setOfBanks = new Set();
  setOfBanks.add(axisBank);
  setOfBanks.add(sbiBank);
  setOfBanks.add(iciciBank);
  setOfBanks.add(kotakBank);
  setOfBanks.add(hdfcBank);
  setOfBanks.add(panjabBank);

  console.log(`------------ traverse the set using for of loop--------------------`);

  for (const bank of setOfBanks) {
    console.log(`bankName:${bank.bankName}, location:${bank.location}`);
  }