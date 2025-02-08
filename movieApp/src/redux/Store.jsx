import {legacy_createStore} from 'redux';
import movieReducer from './Reducer';

const store = legacy_createStore(movieReducer);

export default store;