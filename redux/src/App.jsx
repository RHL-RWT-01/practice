import {Provider} from 'react-redux'
import { Store } from './states/Store'
import Todo from './components/Todo'

function App() {
  
  return (
    <>
    <Provider store={Store}>
      <Todo/>
    </Provider>
    
    </>
  )
}

export default App
