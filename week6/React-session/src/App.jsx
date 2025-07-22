import {useState} from "react"
import {memo} from "react"

let globalId = 0;

function App() {
  const [todos, setTodos] = useState([{
    id : globalId++,
    title: "Learn React",
    description: "Learn React with the best resources available online"
  }, {
    id: globalId++,
    title: "Learn JavaScript",
    description: "JavaScript is the language of the web"
  }, {
    id: globalId++,
    title: "Learn CSS",
    description: "CSS is used to style web pages"
  }]);

  function addTodo() {
    const nextId = globalId++;
    setTodos([...todos, {
      id: nextId,
      title:Math.random(),
      description: Math.random()
    }])
  }

  return (
    <>
      <button onClick = {addTodo}>Add Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({title, description}) {
  return <div>
    <h2>{title}</h2>
    <h4>{description}</h4>
  </div>
}


//A parent component re-render triggers all children re-rendering
//1. pushing the state down to minimize re rendering
//2. using useMemo to memoize the component

// function HeaderWithButton() {
//   const [firstTitle, setFirstTitle] = useState("Messi is the GOAT");

//   function changeTitle() {
//     setFirstTitle(Math.random() + " is the GOAT");
//   }

//   return <>
//   <button onClick={changeTitle}>Click to change title</button>
//   <Header title={firstTitle}></Header>
//   </>
// }

export default App
