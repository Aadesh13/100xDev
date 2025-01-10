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

//to use calculate like map function rather than const use Array.prototype.
Array.prototype.calculate = function(logic) {
    const output = [];
    for(let i=0; i<this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));