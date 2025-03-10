import { useEffect, useState } from 'react'
import Task from './components/Task'
const url = 'http://localhost:8000/tasks'

function App() {
   const [tasks, setTasks] = useState([])

   useEffect(() => {
     fetch(url)
       .then(res => res.json())
       .then(data => setTasks(data))
   }, [])
  return (
    <>
    <Task tasks={tasks} />
    </>
  )
}

export default App
