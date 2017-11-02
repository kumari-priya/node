const mortgage = require('./morgage.js');
let mPayment = parseInt(process.argv[2]);
let nYears = parseInt(process.argv[3]);
let iRate = parseInt(process.argv[4]);
let {monthlyPayment, monthlyRate, amortization} =
mortgage.calculateAmortization(mPayment,nYears,iRate);
console.log(monthlyPayment);
console.log(monthlyRate);
console.log(amortization);
