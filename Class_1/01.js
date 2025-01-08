const allUsers = [{
    firstName:"Aman" ,
    gender: "male"
},{
    firstName:"Shreya",
    gender:"female"
},{
    firstName:"ravi",
    gender:"male"
}];

for(let i=0; i<allUsers.length; i++) {
    if(allUsers[i]['gender'] == "male") {
        console.log(allUsers[i]["firstName"]);
    }
}