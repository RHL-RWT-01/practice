import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Feedback system</h1>
      <h2>Feedbacks</h2>
      <div>
        <div>
          <h3>Feedback 1</h3>
          <p>Feedback description</p>
        </div>
        <div>
          <h3>Feedback 2</h3>
          <p>Feedback description</p>
        </div>
        <div>
          <h3>Feedback 3</h3>
          <p>Feedback description</p>
        </div>
      </div>
      <h2>Feedback form</h2>
      <form>
        <label>
          Feedback
          <input type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
