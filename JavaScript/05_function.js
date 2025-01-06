//differnce in function statement & function expression is hoisting
// a();               
// b();                  //typeerror , treats b as any var variable 

//Function statement  aka function declaration
function a() {
    console.log("a called");
}

//Function expression
 var b = function () {
    console.log("b called");
}

a();
b();

// Anonymous function  = function without a name maybe assigned to var like above
// function () {

// }

//Named Function Expression - function expression with a name
var c = function xyz() {
    console.log("c called");
}
c();
//xyz();               //reference error xyz not defined

//difference between parameters & arguments
//values passed inside a function are arguments & labels/identifiers that get those
//values are parameters , params are in local scope of function

//First Class Functions

//Arrow functions
