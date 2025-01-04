function arithmeticcall(a,b,arithmetifinal) {
    const ans = arithmetifinal(a,b)
    return ans
}

function sum(a,b) {
    return a+b;
}
function greet() {
    console.log("hiiiii")
}
const value = arithmeticcall(2,3,sum)
setTimeout(greet, 3*1000)

var a = 1;
console.log(a);
