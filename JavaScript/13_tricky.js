users = [
    { firstName: 'John',lastName:'Kumar', age: 32},
    { firstName: 'Donald',lastName:'Trump', age: 74},
    { firstName: 'Barak',lastName:'Obama', age: 74},
    { firstName: 'Narendra',lastName:'Modi', age: 70},
    { firstName: 'Virat',lastName:'Kohli', age: 28}
]

// 1. Print the full name of all users in the array
const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);

// 2.print users whose age are above 50
const output1 = users.filter((x) => x.age > 50);
console.log(output1);

//4. print count of users of diff ages
const output3 = users.reduce((acc,curr) =>{
    if(acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
},{})
console.log(output3);


//chaining of map and filter
// 3. Print the full name of all users in the array who are above 50 years
const output2 = users.filter((x) => x.age > 50)
.map((x) => x.firstName + " " + x.lastName);

//5. print the first name of all users whose age is less than 30
const output4 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output4);

//using reduce
const output5 = users.reduce((acc,curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);
console.log(output5);