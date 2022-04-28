// Listing 9.4-1 To return or to yield

import { log, splitline } from '../util.js'

function * sayIt() {
    return 'The Joy of JavaScript';
}

class SomeClass {
    * sayIt() {
        return 'The Joy of JavaScript';
    }
}

const it = sayIt();
log('it:', it);

splitline();

const obj = new SomeClass();
log('obj.sayIt():', obj.sayIt());

splitline();

log(it.next());

function * sayIt1 () {
    // Version 1
    // yield 'The';
    // yield 'Joy';
    // yield 'of';
    // yield 'JavaScript';

    // Version 2
    const arr = 'The Joy of JavaScript'.split(' ');
    for(let i = 0, len = arr.length; i < len; i++) {
        yield arr[i];
    }
}

const it1 = sayIt1();
log(it1.next());
log(it1.next());
log(it1.next());
log(it1.next());
log(it1.next());

splitline();

for(const word of sayIt1()) {
    log(word);
}

/*
Launch test: node ch9/listing9.3
Resutl: 
it: Object [Generator] {}
------------------------------
obj.sayIt(): Object [Generator] {}
------------------------------
{ value: 'The Joy of JavaScript', done: true }
{ value: 'The', done: false }
{ value: 'Joy', done: false }
{ value: 'of', done: false }
{ value: 'JavaScript', done: false }
{ value: undefined, done: true }
------------------------------
The
Joy
of
JavaScript
*/