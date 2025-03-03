import { useEffect, useState } from 'react'
import Task from './components/Task'


function App() {
   const [tasks, setTasks] = useState([])

   useEffect(() => {
     fetch('http://localhost:8000/tasks')
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
