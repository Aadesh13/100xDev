import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server-faraz.onrender.com/todos")
      .then(response => {
        setTodos(response.data.todos)
      })
  }, []);

  return (
    <>
      {todos.map(todo => 
        <Todo title = {todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({title, description}) {
  return <div>
    {title}
    {description}
  </div>
}

export default App
