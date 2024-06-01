import React,{useState} from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState(0);// useState in array format  
  //const [color,setColor]=useState('white')
  return (
    <div className='parentDiv' style={{background:color}}>
      <button onClick={()=>{
        setValue((state)=>{
          return state + 1
        })
      }}>Increment</button>
      <label>{value}</label>
      <button onClick={()=>{
        setValue((state)=>{
          return state - 1
        })
      }}>Decrement</button>
      {/* <button onClick={()=>{
         setColor('blue')
      }}>Blue</button>
      <button onClick={()=>{
        setColor('green')
      }}>Green</button> */}
    </div>
    
  );
}

export default App;
