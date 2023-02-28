function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`Month  of the Year is ${monthNumber} :january `);
      break;
    case 2:
      console.log(`Month  of the Year is ${monthNumber} :February `);
      break;
    case 3:
      console.log(`Month  of the Year is ${monthNumber} :March `);
      break;
    case 4:
      console.log(`Month  of the Year is ${monthNumber} :April `);
      break;
    case 5:
      console.log(`Month  of the Year is ${monthNumber} :May `);
      break;
    case 6:
      console.log(`Month  of the Year is ${monthNumber} :June `);
      break;
    case 7:
      console.log(`Month  of the Year is ${monthNumber} :July `);
      break;
    case 8:
      console.log(`Month  of the Year is ${monthNumber} :August `);
      break;
    case 9:
      console.log(`Month  of the Year is ${monthNumber} :September `);
      break;
    case 10:
      console.log(`Month  of the Year is ${monthNumber} :Octomber `);
      break;
    case 11:
      console.log(`Month  of the Year is ${monthNumber} :November `);
      break;
    case 12:
      console.log(`Month  of the Year is ${monthNumber} :December `);
      break;

    default:
      console.log(`Invalid Month ${monthNumber}`);
      break;
  }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(undefined);
monthOfYear(0);
monthOfYear(null);
monthOfYear(-4);




