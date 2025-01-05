//closure helps in data encapsulation
function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
    }
}
//count cannot be accesses from outside due to data encap
//console.log(count);   

//to access it 
var counter1 = counter();
counter1();