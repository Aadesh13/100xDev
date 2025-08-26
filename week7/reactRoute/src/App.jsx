import {useState, useContext} from 'react';
import { CountContext } from './context';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
        <CountRenderer />
        <Button />
      </CountContext.Provider>
    </div>
  )
}

function CountRenderer() {
  const {count} = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Button() {
  const {count, setCount} = useContext(CountContext);

  return <div>
    <button onClick={() =>{
      setCount(count + 1)
    }}>Increase</button>
      
    <button onClick = {() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}
export default App
