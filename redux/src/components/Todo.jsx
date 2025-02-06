// import React,{useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux';

// export default function Todo() {
//     const [todo, setTodo] = useState('');
//     const todos =useSelector(state => state.todos);
//     const action = useDispatch();
//   return (
//     <>   
//         <div>
//         <h2>Todo-List</h2>
//         <input type="text" placeholder="Add Todo" onChange={(e)=>setTodo(e.target.value)} />
//         <button type="submit" onClick={()=>action({type:ADD_TODO,payload:todo,id:Math.random(),completed:false})} >Add Todo</button>
//         </div>

//         <div>
//             {todos.length<1 ?<h3>No Todo yet</h3>:todos.map((todo)=> <>
//                <p>{todo.text}</p> 
//                <button onClick={()=>action({type:DELETE_TODO,payload:todo.id})}>Delete</button>
//             </>)
//             }
            
//         </div>
//     </>
//   )
// }
import React, { useState, useEffect } from "react";

const Todo = () => {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Todo;