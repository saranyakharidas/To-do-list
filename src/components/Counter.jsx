import React, {useState} from 'react'

const Counter = () => {
  const [number,setNumber]=useState(0)
  
  return (
    <div><div className="Container"> <h4>Increment & Decrement</h4></div>
    
    <button className="increment" onClick ={()=> setNumber(number+1)}>+</button>
   <button>{number}</button>
    <button  className="decrement" onClick ={()=> setNumber(number-1)}>-</button>
   
   
    </div>
  )
  
}

export default Counter