function varTest() {
    for (var i = 1; i <= 3; i++) {
        console.log('block ', i)
    }
    console.log('function ', i); // i variable is visible outside the forloop, its scope is not block , its scope is function
}
varTest()

function letTest() {
    for (let i = 1; i <= 3; i++) {
        console.log('block ', i)
    }
    // console.log('function ', i); i is not visible outside the loop, which is expected
}
letTest()