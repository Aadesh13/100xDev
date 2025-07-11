const mongoose = require('mongoose');

//connect to mongo db
mongoose.connect('mongodb+srv://admin:Kbt%401310@cluster0.uydoodl.mongodb.net/todos');

//define the schema for todos
const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

//create model
const todo = mongoose.model('todos', todoSchema);

//export the model
module.exports = {
    todo
}