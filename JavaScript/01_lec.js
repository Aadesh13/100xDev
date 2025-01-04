//hoisting in JS
console.log("---Hoisting in JS variable vs function declaration----")
//console.log(getName);
getName();                                  //10
console.log(a);                             //undefined

var a = 7;
function getName() {
    var a = 10;
    console.log(a);
}


//undefined vs not defined
console.log("----undefined vs not defined----")
var x;
console.log(x);                                //undefined
//console.log(y);
var x = 10;
console.log(x);                                //10
x = " abc";
console.log(x);                                // abc

//scope of chain
console.log("----Scope of chain----")
function ab() {
    var b = 10;
    function cd() {
        console.log(b);
    }
    cd();
}

ab();                                                //prints 10
//console.log(b);                                    // throws reference error