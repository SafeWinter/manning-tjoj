// Listing 9.2 Making an object iterable with Symbol.iterator

import { log, splitline } from '../util.js';

function randomNumberIterator(size = 1) {

    const nextRandInt = min => max => 
        Math.floor(Math.random() * (max - min)) + min;

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
            const done = numbers.length === 0;
            const value = done ? undefined : numbers.shift();
            return {
                done, value
            }
        }
        
    }
}

let it = randomNumberIterator(3);

for(const num of it) {
    log(num)
}

splitline();

log(...randomNumberIterator(3));

/*
Launch test: node ch9/listing9.2
Resutl: 
5959845286446802
3045154391645014
3494898224254606
------------------------------
5716598885735482 2694520268264940 6385919894803832
*/