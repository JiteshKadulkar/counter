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
  const increment2=()=>{
    setCount(count+2)
  }

  const decrement2=()=>{
    setCount(count-2)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={decrement}>Decrement by 1</button>
      <h2>Triple Increment / Decrement </h2>
      <button onClick={increment3}>Increment by 3</button>
      <button onClick={decrement3}>Decrement by 3</button>
      <h2>Double Increment/Decrement</h2>
      <button onClick={increment2}>Increment by 2</button>
      <button onClick={decrement2}>Decrement by 2</button>
    </div>
  );
}

export default App;
