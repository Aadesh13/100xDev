import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // State to keep track of which todo id is selected
  const [id, setId] = useState(1);

  return (
    <div>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>
      <button onClick={() => setId(4)}>4</button>
      <Todo id={id} />
    </div>
  )
}

function Todo({ id }) {
  // State to store the fetched todo
  const [todos, setTodos] = useState({});

  useEffect(() => {
    // Fetch todo when id changes using fetch API
    // fetch("https://sum-server-faraz.onrender.com/todo?id=" + id)
    //   .then(async function (res) {
    //     const json = await res.json();
    //     setTodos(json.todo);
    //   })
    // Alternative: you could use axios here instead of fetch
    axios.get("https://sum-server-faraz.onrender.com/todo?id="+id)
    .then(response => {
      setTodos(response.data.todo)
    })
  }, [id])

  return (
    <div>
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  )
}

export default App
