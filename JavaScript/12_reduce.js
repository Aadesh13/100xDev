//reduce in js is used to reduce the array to a single value
//reduce takes a callback function with two arguments
//the first argument is the accumulator and the second argument is the current value
//the callback function returns the accumulator
//the reduce function also takes an optional initial value of the accumulator
//if the initial value is not given then the first element of the array is taken as the initial value


const arr = [2,3,4,5,6];

//find sum of the array
const sum = arr.reduce((acc,curr) => acc+curr);
console.log(sum);

//find the maximum element of the array using reduce and Math.max
const max1 = arr.reduce((acc, curr) => {
    if(acc < curr) {
        acc = curr;
    }
    return acc;
})
console.log(max1);

const max = Math.max(...arr);
console.log(max);

//... is used to spread the array