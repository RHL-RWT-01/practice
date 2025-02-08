import {Provider} from 'react-redux';
import { Store } from './redux/Store';
import Matches from './components/Matches';
import MatchesList from './components/MatchesList';

function App() {
  

  return (
    <>
      <Provider store={Store}>
        <Matches/>
        <MatchesList/>
      </Provider>
    </>
  )
}

export default App
