// API: Object.create(proto[, propertiesObject]);
// Listing 2.2 Transaction objects linked by a basic prototype setup

import { log } from '../util.js';

// Prototype object from which to derive other objects—a
// regular object, not some abstract blueprint
const transaction = {
  sender: 'luis@tjoj.com',
  recipient: 'luke@tjoj.com',
};

// Creates a derived object from the prototype
const moneyTransaction = Object.create(transaction);

moneyTransaction.funds = 0.0;

// Adds new methods to the child object.
// Repeating the function name in the declaration helps build more informative stack traces.
moneyTransaction.addFunds = function addFunds(funds = 0) {
  this.funds += Number(funds);
};

moneyTransaction.addFunds(10.0);
log(moneyTransaction.funds); // 10

// Launch test: node ch2/listing2.2
// Resutl: 10
