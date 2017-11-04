var fs = require("fs");
var action = process.argv[2];

function total() {
  var result = 0;
  fs.readFile("bank.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(", ");
    for (var i = 0; i < dataArr.length; i++) {
      result += parseFloat(dataArr[i]);
    }
    console.log("Balance " + result.toFixed(2));
  });
}

function deposit() {
  var amount = process.argv[3];
  fs.appendFile("bank.txt", ", " + amount, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deposite  " + amount);
      total();
    }
  });
}

function withdraw() {
  var amount = process.argv[3];
  var negative = "-" + amount
  fs.appendFile("bank.txt", ", " + negative, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Withdraw  " + amount);
      total();
    }
  });
}

function lotto() {
  var lotto = Math.floor(Math.random() * 10 + 1);
  if (lotto == 9) {
    var amount = 2;
    fs.appendFile("bank.txt", ", " + amount, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("You won  " + amount);
        total();
      }
    });
  } else {
    var negative = "-" + .25
    fs.appendFile("bank.txt", ", " + negative, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("You lost  " + negative);
        total();
      }
    });
  }
}

switch (action) {
  case 'total':
    total();
    break;
  case 'deposit':
    deposit();
    break;
  case 'withdraw':
    withdraw();
    break;
  case 'lotto':
    lotto();
    break;
  default:
    console.log("wrong input");
    break;
}
