import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {

  const [count,setCount]=useState(0)
    
  const increment=()=>{
    setCount(count+1)
  }

  const decrement=()=>{
    setCount(count-1)
  }

  const increment3=()=>{
    setCount(count+3)
  }

  const decrement3=()=>{
    setCount(count-3)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={decrement}>Decrement by 1</button>
      <h1>Triple increment buttons</h1>
      <button onClick={increment3}>Increment by 3</button>
      <button onClick={decrement3}>Decrement by 3</button>
    </div>
  );
}

export default App;
