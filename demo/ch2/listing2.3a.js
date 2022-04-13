// API: Object.create(proto, propertiesObject);
// Listing 2.3a Using Object.create's 2nd parameter

import { log } from '../util.js';

const transaction = {
  sender: 'luis@tjoj.com',
  recipient: 'luke@tjoj.com',
};

// using Object.create's 2nd parameter
const moneyTransaction = Object.create(transaction, {
  funds: {
    value: 0.0,
    // Object.keys, Object.assign
    enumerable: true,
    // Reassign the value
    writable: true,
    // use key word delete
    configurable: false,
  },
});

moneyTransaction.addFunds = function addFunds(funds = 0) {
  this.funds += Number(funds);
};

moneyTransaction.addFunds(10.0);

log(Object.getPrototypeOf(moneyTransaction) === transaction); // true

log(moneyTransaction.sender); // 'luis@tjoj.com'

log(moneyTransaction.funds); // 10

/*
Launch test: node ch2/listing2.3a
Resutl:
true
luis@tjoj.com
10
*/
