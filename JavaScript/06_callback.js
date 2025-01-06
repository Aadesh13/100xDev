setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x called");
    y();
}

x(function y() {
    console.log("y called");
});

// Callbacks: Functions that are passed as arguments to other functions and executed later.
// Asynchronous Operations: Functions like setTimeout that allow code to run after a specified delay,
// without blocking the execution of subsequent code
