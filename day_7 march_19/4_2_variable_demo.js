let a = 10;
console.log('Global ', a);

function f1() {
    let a = 20;
    console.log('function ', a);

    if (true) {
        let a = 30;
        console.log('block ', a);
    }
}
f1();