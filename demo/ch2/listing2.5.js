// Listing 2.5 Building and linking objects using the constructor functions pattern

import { log } from '../util.js';

// Base constructor
function Transaction(sender, recipient) {
  this.sender = sender;
  this.recipient = recipient;
}

function HashTransaction(sender, recipient) {
  // Detects whether the instantiation of the child object omits
  // the new keyword and fixes the call. This line helps developers
  // who forget to write new. I’ll come back to this topic in section 2.2.2.
  if (!new.target) {
    return new HashTransaction(sender, recipient);
  }

  // Calls the parent’s constructor to initialize any parent member properties into this object’s context
  Transaction.call(this, sender, recipient);

  // Adds a new calculateHash method to every instance created
  this.calculateHash = function calculateHash() {
    const data = [this.sender, this.recipient].join('');
    let hash = 0,
      i = 0;
    while (i < data.length) {
      hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
    }
    return hash ** 2;
  };
}

// Uses the new keyword to instantiate new objects.
// The new keyword is required to pass the newly created object as the this context.
const tx = new HashTransaction('luis@tjoj.com', 'luke@tjoj.com');

log(tx.calculateHash()); // 237572532174000400
log(tx.sender); // luis@tjoj.com

// Test whether instance methods are the same (no)
const tx1 = new HashTransaction('luis@tjoj.com', 'luke@tjoj.com');
const tx2 = new HashTransaction('luis@tjoj.com', 'luke@tjoj.com');
log(
  'tx1.calculateHash === tx2.calculateHash:',
  tx1.calculateHash === tx2.calculateHash
); // tx1.calculateHash === tx2.calculateHash: false

/*
Test: node node ./demo/ch2/listing2.5
Result:
237572532174000400
luis@tjoj.com
tx1.calculateHash === tx2.calculateHash: false
*/
