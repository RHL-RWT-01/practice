import { useState } from "react"
type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}
function Todos() {
    const [todos, setTodos] = useState<Todo[]>([])
    const handleClick = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        setTodos([data])
    }

    return (
        <>
            <h1 style={{backgroundColor:"aqua",
            color:"black",
            textAlign:"center",
            padding:"10px",
            }} >Todos</h1>
            <button onClick={handleClick} >Get</button>
            {todos.length == 0 ? <p>No todos</p> : <ul>{todos.map((todo: Todo) => <li key={todo.id}>{todo.title}
            <input type="checkbox" checked={todo.completed} ></input></li>)}</ul>}
        </>
    )
}

export default Todos