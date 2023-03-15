
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

  console.log(`----------------------------------stepA----------------------------------`);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank );
console.log(panjabBank);

  const mapOfBanks= new Map();
  mapOfBanks.set(axisBank);
  mapOfBanks.set(sbiBank);
  mapOfBanks.set(iciciBank);
  mapOfBanks.set(kotakBank);
  mapOfBanks.set(hdfcBank);
  mapOfBanks.set(panjabBank);

  
  console.log(`------------------------------------------------stepD---------------------------------`);
  const keyOfMap = mapOfBanks.keys();

  console.log(`------------ traverse the map using for of loop--------------------`);
  for (const key of keyOfMap) {
    
    console.log(`bankName:${key.bankName} , account no.:${key.account}, interestRate:${key.interestRate}`);
  }