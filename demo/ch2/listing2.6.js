// Listing 2.6 Configuring the prototype chain using the constructor functions pattern

import { log } from '../util.js';

function Transaction(sender, recipient) {
  this.sender = sender;
  this.recipient = recipient;
}

Transaction.prototype.displayTransaction = function displayTransaction() {
  return `Transaction from ${this.sender} to ${this.recipient}`;
};

function HashTransaction(sender, recipient) {
  if (!new.target) {
    return new HashTransaction(sender, recipient);
  }
  Transaction.call(this, sender, recipient);
}

// Links prototypes for the lookup mechanism to work
// in case you need to resolve properties from Transaction.prototype
HashTransaction.prototype = Object.create(Transaction.prototype);
// Fixes or sets the constructor value.
// Without this line, tx would be a Transaction object or constructed from Transaction.
HashTransaction.prototype.constructor = HashTransaction;

HashTransaction.prototype.calculateHash = function calculateHash() {
  const data = [this.sender, this.recipient].join('');
  let hash = 0,
    i = 0;
  while (i < data.length) {
    hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
  }
  return hash ** 2;
};

// -------------------
const tx1 = new HashTransaction('luis@tjoj.com', 'luke@tjoj.com');
const tx2 = new HashTransaction('luis@tjoj.com', 'luke@tjoj.com');

log(Transaction.prototype.isPrototypeOf(tx1)); // true
log(tx1.calculateHash === tx2.calculateHash); // true
log(tx1.calculateHash());
log(tx1.displayTransaction === tx2.displayTransaction); // true
log(tx2.displayTransaction());
log(tx1.__proto__.__proto__); // { displayTransaction: [Function: displayTransaction] }

/**
Test: node demo/ch2/listing2.6
Result:
true
true
{ displayTransaction: [Function: displayTransaction] }
 */
