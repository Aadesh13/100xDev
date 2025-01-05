//closure helps in data encapsulation
function counterr() {
    var count = 0;
    return function incrmntCounter() {
        count++;
        console.log(count);
    }
}
//count cannot be accesses from outside due to data encap
//console.log(count);   

//to access it 
var counter1 = counterr();
counter1();
counter1();                  //updates count in scope of counter1

//now interesting part
var counter2 = counterr();
counter2();                 //it prints 1 as it access from scope of counter function 

//now using Constructor function it can be made scalable
console.log("-------Constructor function--------")
function Counter() {
    var cnt = 0;
    this.incrementCounter = function(){
        cnt++;
        console.log(cnt);
    }
    this.decrementCounter = function(){
        cnt--;
        console.log(cnt);
    }
}

var cnt1 = new Counter();
cnt1.incrementCounter();
cnt1.incrementCounter();
cnt1.decrementCounter(); 