// Global Scope & Function Scope
var a = 10; // global
let b = 20; // global

function f1() {
    var c = 30; // function
    e = 50;  // scope is Gobal
    console.log('F1 started...')
    console.log('a ', a)
    console.log('b ', b)
    console.log('c ', c)
    // console.log('d ', d)  No
    console.log('e ', e); // yes
    console.log('F1 Ended...')
}
function f2() {
    var d = 40; // Function
    console.log('F2 started...')
    console.log('a ', a)
    console.log('b ', b)
    // console.log('c ', c)  No
    console.log('d ', d)
    console.log('e ', e) // yes
    console.log('F2 ended...')
}
f1();
f2();

// When a variable is declared without var/let/const , no matter where it is declared, its scope is global


