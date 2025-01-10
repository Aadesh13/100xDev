const arr = [2,3,4,5,6];

//double
function double(x) {
    return 2 * x;
}

//triple
function triple(x) {
    return 3 * x;
}

//binary
function binary(x) {
    return x.toString(2);
}

const output = arr.map(binary);
console.log(output);


//function can also be initialized in argument of map function
const output1 = arr.map(function binary(x) {
    return x.toString(2);
})
console.log(output1);

//write same thing using arrow function
const output2 = arr.map((x) => Math.PI*x*x);
console.log(output2);