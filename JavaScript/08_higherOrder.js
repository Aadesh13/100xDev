//write function that calculates area , circumference & diameterof circle
//use higher order function to show code reusability & flexibilty

const radius = [2,5,7,9,10];

const area = function (r) {
    return Math.PI * r * r;
}
const diameter = function(r) {
    return 2 * r;
}

const circumference = function(r) {
    return 2 * Math.PI * r
}

const calculate = function(arr, logic) {
    const output = [];
    for(let i=0; i<arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,circumference));
//map
console.log(radius.map(area));