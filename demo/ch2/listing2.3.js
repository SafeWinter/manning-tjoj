// API: Object.getPrototypeOf(obj: any): any
// Listing 2.3 Inspecting the new transaction objects

//----------------------------code from listing2.2 -- start
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
//----------------------------code from listing2.2 -- end

// Task1: Checks whether the prototype link has been established
log(Object.getPrototypeOf(moneyTransaction) === transaction); // true

// Task2: Verifies that inherited properties are accessible from the child object
log(moneyTransaction.sender); // 'luis@tjoj.com'

// Task3: Check current funds in child object
log(moneyTransaction.funds); // 10

/*
Launch test: node ch2/listing2.3
Resutl:
true
luis@tjoj.com
10
*/
