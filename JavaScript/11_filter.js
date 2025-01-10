//filter is used to filter out the elements of array which satisfy the condition
//differnce between map and filter is that map returns all the elements of array 
// but filter returns only those elements which satisfy the condition
const arr = [2,3,4,5,6];

function getOdd(x) {
    return x%2 !== 0;
}
const output1 = arr.filter(getOdd);
console.log(output1);

//function to filter out the odd numbers
const output = arr.filter((x) => x%2 !== 0) ;
console.log(output);

//use filter to get x>3
const output2 = arr.filter((x) => x>3);
console.log(output2);

//difference in == & === is that == is used to compare the values of two variables and === is 
//used to compare the values and type of two variables