let n1 = 31;
let n2 = n1;
n1 = 32;
console.log(n2);            // Does this print 31 or 32?

let f1 = {num:3, den:4};
let f2 = f1;
f1 = {num:1, den:2};
console.log(f2);            // Does this print {num:3, den:4} or {num:1, den:2}?

let f1 = {num:3, den:4};
let f2 = f1;
f1.num = 1;
f1.den = 2;
console.log(f2);            // Does this print {num:3, den:4} or {num:1, den:2}?

let f1 = {num:3, den:4};
let f2 = f1;
f1.toDecimal = function(){return this.num / this.den};

console.log(f2.toDecimal());            // Does this work?

let f1 = {num:3, den:4, toDecimal:function(){return this.num / this.den}};
