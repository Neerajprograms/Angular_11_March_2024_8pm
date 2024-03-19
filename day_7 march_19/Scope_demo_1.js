let a = 10;
console.log('Global ', a); // global

function f1() {
    let a = 20;
    console.log('function ', a); // function 

    if (true) {
        let a = 30;
        console.log('block ', a); // block
    }
}
f1();