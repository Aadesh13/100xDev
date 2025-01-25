const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 success");
        //reject("P1 fail");
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 success");
        //reject("P2 fail");
    },1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 success");
        //reject("P3 fail");
    },2000);
})


Promise.any([p1, p2, p3]).then((res) => {
    //after 3sec it will log the array of resolved promises
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

//Promise.all