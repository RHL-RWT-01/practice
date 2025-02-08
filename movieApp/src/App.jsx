
import {Provider} from 'react-redux'
import Movies from './components/Movies'
import store from './redux/Store'
function App() {

  return (
    <>
      <Provider store={store}>
        <Movies/>
      </Provider>
    </>
  )
}

export default App
