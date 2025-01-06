setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x called");
    y();
}

function y() {
    console.log("y called");
};

x(y);