const mortgage = require('./morgage.js');
let {monthlyPayment, monthlyRate, amortization} =
    mortgage.calculateAmortization(1000,5,9);
console.log(monthlyPayment);
console.log(monthlyRate);
console.log(amortization);
