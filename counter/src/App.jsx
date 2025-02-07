import { useState } from 'react'
import { Provider } from 'react-redux'
import Counter from '../Counter'
import { Store } from './redux/Store'

function App() {
  

  return (
    <>
      <Provider store={Store}>
        <Counter/>
      </Provider>
    </>
  )
}

export default App
