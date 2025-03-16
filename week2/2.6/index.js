//map, filter and arrow fns

function sum(a,b) {
    return a+b;
}

//arrow function
const sum2 = (a,b) => {
    return a+b;
}

const ans = sum2(1,2)
console.log(ans)

// //map
// //given an array give me back a new arrayin which every
// //value is multiplied by 2
const arr = [1,2,3,4,5,6,7,8,9,10]

// //simple way
// const ans2 = []
// for(let i=0; i<arr.length; i++) {
//     ans2.push(arr[i]*2)
// }
// console.log(ans2)

// //using map
// const newArr = arr.map((value) => {
//     return value * 2;
// })
// console.log(newArr)

// //using map
// function transform(i) {
//     return i*2
// }
// const ans3 = arr.map(transform)
// console.log(ans3)

//filter
//return even values from arr
const ans5 = []
for(let i=0; i<arr.length; i++) {
    if(arr[i] % 2 === 0) {
        ans5.push(arr[i])
    }
}
console.log(ans5)

const ans4 = arr.filter((value) => {
    return value % 2 === 0;
})
console.log(ans4)