import React from 'react'
import { decrement, increment } from './src/redux/Actions';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
    const count = useSelector(state => state.count)
    const action = useDispatch();
    console.log(count)
  return (
    <>
     <h2>Count:{count}</h2>
     <button onClick={()=>action(increment())}>Increment</button>
     <button onClick={()=>action(decrement())} >Decrement</button>
     <button onClick={()=>action(reset())}>Reset</button>
    </>
  )
}

export default Counter