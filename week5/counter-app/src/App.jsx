import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Do DSA",
    description: "Do DSA from 9-11",
    completed: true
  }, {
    title: "Lunch",
    description: "take lunch 12-1",
    completed: false
  }, ]);

  function addTodo() {
    setTodos([...todos, {
      title : "new Todo",
      description : "just do it"
    }])
  }

  return (
      <div>
        <button onClick={addTodo}>Add a random todo</button>
        {todos.map(function(todo) {
          return <Todo title={todo.title} description={todo.description} />
        })}
      </div>
  )
}

//component
function Todo(props) {
  return <div>
    <h2>{props.title}</h2>
    <h3>{props.description}</h3>
  </div>
}

export default App
