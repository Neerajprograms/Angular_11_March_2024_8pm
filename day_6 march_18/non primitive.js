let obj = { 'a': 10, b: 20 };
console.log(obj, typeof obj);

let arr = [10, 20, 30]
console.log(arr, typeof arr);

// How Can we differentiate array & object
console.log(obj instanceof Array); // false
console.log(arr instanceof Array); // true

console.log(Array.isArray(obj)); // false
console.log(Array.isArray(arr)); // true
