import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const todos =useSelector(state => state.todos);
    const action = useDispatch();
  return (
    <>   
        <div>
        <h2>Todo-List</h2>
        <input type="text" placeholder="Add Todo" onChange={(e)=>setTodo(e.target.value)} />
        <button type="submit" onClick={()=>action({type:ADD_TODO,payload:todo,id:Math.random(),completed:false})} >Add Todo</button>
        </div>

        <div>
            {todos.length<1 ?<h3>No Todo yet</h3>:todos.map((todo)=> <>
               <p>{todo.text}</p> 
               <button onClick={()=>action({type:DELETE_TODO,payload:todo.id})}>Delete</button>
            </>)
            }
            
        </div>
    </>
  )
}

