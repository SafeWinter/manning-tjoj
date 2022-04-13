// API: Object.create(protoObj), Object.setPrototypeOf(child, parent)
// Listing 2.4 Creating hashTransaction with basic hashing calculation

import { log, splitline } from '../util.js';

const transaction = {
  sender: 'luis@tjoj.com',
  recipient: 'luke@tjoj.com',
};

const hashTransaction = Object.create(transaction);

// Adds a method to calculate its own hash
hashTransaction.calculateHash = function calculateHash() {
  // Properties that become input to the hashing algorithm
  const data = [this.sender, this.recipient].join('');
  let hash = 0,
    i = 0;
  while (i < data.length) {
    hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
  }
  // Uses the exponentiation operator to square the hash value
  return hash ** 2;
};

log(hashTransaction.calculateHash()); // 237572532174000400

// ------------------------------------------------------------------
splitline();
// ------------------------------------------------------------------

// Alternative: Object.setPrototypeOf
const moneyTransaction = Object.setPrototypeOf({}, hashTransaction);
moneyTransaction.funds = 0.0;
moneyTransaction.addFunds = function addFunds(funds = 0) {
  this.funds += Number(funds);
};
moneyTransaction.addFunds(10.0);

log(moneyTransaction.calculateHash()); // 237572532174000400
log(moneyTransaction.funds); // 10
log(moneyTransaction.sender); // 'luis@tjoj.com'
log(moneyTransaction.recipient); // 'luke@tjoj.com'

/*
Launch test: node ch2/listing2.4
Resutl:
237572532174000400
------------------------------
237572532174000400
10
luis@tjoj.com
luke@tjoj.com
*/
