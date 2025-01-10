console.log("Start");
setTimeout(function cb() {
    console.log("callback");
},5000);
console.log("End");

//setTimeout has trust issues to resolve it it needs to block main thread

