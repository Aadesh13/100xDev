//create an in memory hospital

//import express and create an instance of express
const express  = require('express');
const app = express(); 

//start by creating an in memory array
const users = [{
    name : "Aadesh",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

//create routes

//GET / - get the number of kidneys & their heatlh
app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;

    //filter
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

//POST / - add a kidney
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
     
    //add a kidney
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Kidney added"
    })
})

//PUT / - update a kidney , send 411 if no unhealthy kidney
app.put("/", function(req,res) {
    if(checkUnhealthyKidney()) {
        for(let i=0; i<users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({
            msg: "Kidney updated"
        })
    } else {
        res.status(411).json({
            msg: "No unhealthy kidney"
        })
    }
    
})

//DELETE / - delete all unhealthy kidney
app.delete("/", function(req,res) {
    //if no unhealthy kidney , return 411
    if(checkUnhealthyKidney()) {
        //put healthy kidneys into new temp array
        const newKidneys = []
        for(let i=0; i<users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                    newKidneys.push({
                    healthy: true
                })
            }
        }
        //update the kidneys array
        users[0].kidneys = newKidneys;
        res.json({
            msg : "Unhealthy Kidneys deleted"
        })
    } else {
        res.status(411).json({
            msg: "No unhealthy kidney"
        })
    }  
})

function checkUnhealthyKidney() {
    let isUnhealthyKidneyPresent = false;
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            isUnhealthyKidneyPresent = true;
            break;
        }
    }
    return isUnhealthyKidneyPresent;
}

//start the server
app.listen(3000)