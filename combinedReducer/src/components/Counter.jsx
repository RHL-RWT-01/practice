import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Actions';
function Counter() {

    const counter = useSelector(state => state.counter);
    const action = useDispatch();

  return (
    <>
        <h1>Counter</h1>
        <h2>Count:{counter.count} </h2>
        <button onClick={()=>action(increment())} >Increment</button>
        
        
        <button onClick={()=>action(decrement())} >Decrement</button>
    </>
  )
}

export default Counter