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
        [Symbol.iterator]() {
            // Because the object already implements
            // next, it’s enough to return itself, making
            // it both an iterator and an iterable.
            return this
        },
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
for(const num of it) {
    log(num)
}

log(...randomNumberIterator(3));