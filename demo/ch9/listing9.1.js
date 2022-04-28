// Listing 9.1 Random-number generator using an iterator

import { log } from '../util.js';

function randomNumberIterator(size = 1) {

    // Internal helper function to compute the next random integer
    const nextRandInt = min => 
        max => Math.floor(Math.random() * (max - min)) + min;

    // Creates a sized array and fills it with random numbers
    const numbers = Array(size)
        .fill(1)
        .map(min => nextRandInt(min)(Number.MAX_SAFE_INTEGER));
    
    return {
        next() {
            return numbers.length === 0
                // Signals the end of the sequence
                ? { done: true }
                // Signals that there are more numbers to enumerate
                : { done: false, value: numbers.shift() }
        }
        
    }
}

let it = randomNumberIterator(3);
log(it.next().value);
log(it.next().value);
log(it.next().value);
log(it.next().done);

/*
Launch test: node ch9/listing9.1
Resutl: 
974489674760776
5457867772842922
3639996493223624
true
*/