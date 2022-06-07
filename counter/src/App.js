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
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={decrement}>Decrement by 1</button>


    </div>
  );
}

export default App;
