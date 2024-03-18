let obj = {};

obj['a'] = 100;
obj['a'] = 200;

let symbol1 = Symbol('hi')
let symbol2 = Symbol('hi')

obj[symbol1] = 10;
obj[symbol2] = 20;

console.log(obj[symbol1])
console.log(obj[symbol2])
