import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitFeedback } from './state/Actions';

function App() {
  const [feedback, setfeedback] = useState('')
  const feedbackReducer = useSelector((state: any) => state.feedbackReducer)
  const action = useDispatch();
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
          <input type="text" onChange={e=>setfeedback(e.target.value)} />
        </label>
        <button type="submit" onClick={action(submitFeedback(feedback))}>Submit</button>
      </form>
    </>
  )
}

export default App
