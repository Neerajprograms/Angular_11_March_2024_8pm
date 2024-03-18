// Primitives are compared by value, non-primitives are compared by address
let a = 10;
let b = 10;
console.log(a == b); // value comparision

let str1 = 'sachin'
let str2 = 'sachin'
console.log(str1 == str2); // value comparision

let arr1 = [10, 20, 30]
let arr2 = [10, 20, 30]
console.log(arr1 == arr2); // address comparision

let obj1 = {}
let obj2 = {}
console.log(obj1 == obj2)