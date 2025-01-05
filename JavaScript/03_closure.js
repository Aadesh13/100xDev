//function along with it's lexical scope bundles together forms a closure
//like calling a function within a function
function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    y();
}

//x();


//set timeout
function z() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 3000);
    console.log("printed before 1");
} 

//z();

//example 2
function z2() {
    var i = 1;
    for(var i=0; i<5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }
    console.log("printed before 1");
} 

//z2();

//example 3
function z3() {

    for(let i=0; i<5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }
    console.log("printed before 1");
} 

//z3();

//example 4
function y() {
    function close(y) {
        for(var i=0; i<5; i++) {
            setTimeout(function() {
                console.log(x);
            }, y*1000);
        }
        close(i);
    }
    console.log("printed before 1");
} 

y();