import {useState} from "react"
import {memo} from "react"

function App() {
  const [firstTitle, setFirstTitle] = useState("Messi is the GOAT");

  function changeTitle() {
    setFirstTitle(Math.random() + " is the GOAT");
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change title</button>
      <Header title={firstTitle}/> 
      <Header title="Messi is the GOAT" />
      <Header title="Messi is the GOAT" />
      <Header title="Ronaldo is the GOAT" />             
    </div>
  )
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

const Header = memo(function({title}) {
  return <div>
    {title}
  </div>
})

export default App
