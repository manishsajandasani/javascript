function first() {
    const x = 100;
    function second() {
        const y = 200;
        console.log(x + y);
    }
    // ReferenceError: y is not defined
    // console.log(y);
    second();
}
first();

if (true) {
    const x = 150;
    if (x === 150) {
        const y = 200;
        console.log(x + y);
    }
    // ReferenceError: y is not defined
    // console.log(y);
}
