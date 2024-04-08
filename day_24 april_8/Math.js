/* Modules
=======
-2 Module Systems   
    a. CommonJS Module System      (module.export , require())
    b. ECMASCRIPT Module System    (export , import) 
    c. AMD
    d. UMD
*/
function add(a, b) {
    console.log(a + b);
}
function mul(a, b) {
    console.log(a * b);
}
module.exports = { add, mul }; // CommonJS