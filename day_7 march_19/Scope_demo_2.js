var a = 10; // global
console.log('global ', a); // 10

function f1() {
    var a = 20; // function
    console.log('function ', a); // 20

    if (true) {
        var name = 'sachin'; // even though name is declared inside block, its scope is not block
        console.log('block ', name);
    }
    console.log('outside block ', name);
}
f1();

