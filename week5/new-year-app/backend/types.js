const zod = require('zod');

// Define validation schemas for todo creation
const createTodo = zod.object({
    title : zod.string() ,
    description : zod.string()
})

// Define validation schemas for updating a todo
const updateTodo = zod.object({
    id : zod.string(),
})

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}