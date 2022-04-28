// Listing 9.3 Strings implementing Symbol.iterator

import { log, splitline } from '../util.js'

log("Joy of JavaScript"[Symbol.iterator]);

splitline();

for(const letter of "Joy of JavaScript") {
    // Logs all 17 characters to the console
    log(letter);
}

/*
Launch test: node ch9/listing9.3
Resutl: 
[Function: [Symbol.iterator]]
------------------------------
J
o
y

o
f

J
a
v
a
S
c
r
i
p
t
*/