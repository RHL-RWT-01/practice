import {Provider} from 'react-redux';
import { Store } from './redux/Store';
import Matches from './components/Matches';
import MatchesList from './components/MatchesList';
import FilterMatches from './components/FilterMatches';

function App() {
  

  return (
    <>
      <Provider store={Store}>
        <Matches/>
        <FilterMatches/>
        <MatchesList/>
      </Provider>
    </>
  )
}

export default App
