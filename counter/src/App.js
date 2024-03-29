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

  const increment4=()=>{
    setCount(count+4)
  }

  const decrement4=()=>{
    setCount(count-4)
  }
  //This is a comment to prove a concept
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
      <h2>Four Times Increment/Decrement</h2>
      <button onClick={increment4}>Increment by 4</button>
      <button onClick={decrement4}>Decrement by 4</button>
      <h1>New branch</h1>
      <h1>New brnach 4 info</h1>
      <h1>Branch 5 details</h1>
      <h1>Master update</h1>
    </div>
  );
}

export default App;
