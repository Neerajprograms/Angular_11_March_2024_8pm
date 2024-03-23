// Function Declaration
function add(a, b) {
    console.log(a + b)
}
add(2, 3);
add(3, 4);

// Function Expression
var sub = function (a, b) {
    console.log(a - b)
}
sub(10, 4);

// Self Invoked / IIFE
(function (a, b) {
    console.log(a * b);
})(3, 5);

(function (c, d) {
    console.log(c*d);
})(3, 5);


// Arrow Function - 2015 - ES-6
var div = (a, b) => {
    console.log(a / b)
}
div(20, 5);