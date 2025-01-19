const p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Promise resolved p1");
    }, 5000);
});

const p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Promise resolved p2");
    }, 10000);
});

//async function always returns a promise
//await is used to wait for the promise to resolve
async function handlePromise() {
    console.log("Hii !!");

    const val = await p1;               
    console.log(val);
    console.log("hello 1");             //JS engine will wait for the promise to resolve

    const val2 = await p2;                              
    console.log(val2);
    console.log("hello 2");
}

handlePromise();

//realworld example
const API_URL = "https://api.github.com/users/Aadesh13";

async function handlePromise2() {
    try {
        const data = await fetch(API_URL);
        const dataJson = await data.json();
        console.log(dataJson);
    } catch(err) {
        console.log(err);
    }
}

handlePromise2();
