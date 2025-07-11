const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require("cors");

// Initialize the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// Route to create a new todo
app.post("/todos", async function(req, res) {
    const createPayload = req.body;

    // Validate the request body using createTodo schema
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        // If validation fails, send error response
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    // Add the new todo to the database
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    });

    // Send success response
    res.json({
        msg : "Todo created"
    });
});

// Route to get all todos
app.get("/todos", async function(req, res) {
    // Fetch all todos from the database
    const todos = await todo.find({});
    res.json({
        todos
    });

});

// Route to mark a todo as completed
app.put("/completed", async function(req, res) {
    const updatePayload = req.body;

    // Validate the request body using updateTodo schema
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    // Update the completed status of the todo in the database
    await todo.updateOne({
        _id : req.body.id
    }, {
        completed : true
    })

    res.json({
        msg : "Todo marked as completed"
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
