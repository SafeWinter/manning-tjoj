// API: Object.create(proto[, propertiesObject]);
// Listing 2.1 Using Object.create to create an object from a prototype

import { log } from '../util.js';

const proto = {
  sender: 'luis@tjoj.com',
};

const child = Object.create(proto);
child.recipient = 'luke@tjoj.com';

log(child.sender);
log(child.recipient);

/**
 * Test script
 * > cd ./demo; node ch2/listing2.1.js
 *
 * Results:
 * luis@tjoj.com
 * luke@tjoj.com
 */
