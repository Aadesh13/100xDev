function arithmeticCall(a,b,arithmetiFinal) {
    const ans = arithmetiFinal(a,b)
    return ans
}

function sum(a,b) {
    return a+b;
}

const value = arithmeticCall(2,3,sum)

function greet() {
    console.log("hiiiii")
}
setTimeout(greet, 3*1000)
console.log(value);
var a = 1;
console.log(a);
