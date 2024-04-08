export function add(a, b) {  // EJS
    console.log(`addition of ${a} & ${b} is ${a + b}`)
}
export function sub(a, b) { // named export
    console.log(`subtraction of ${a} & ${b} is ${a - b}`)
}
export default function mul(a, b) { // default export
    console.log(`multiplication of ${a} & ${b} is ${a * b}`)
}
export let div = (a, b) => {
    console.log(`division of ${a} & ${b} is ${a / b}`)
}


export let name = 'nareshIT';


/* 
1. default export
2. named export 

1 file can have maximum 1 default export
default export cann't be used with variables
default export can be imported with any name
named exports have to be imported with the exact name
*/