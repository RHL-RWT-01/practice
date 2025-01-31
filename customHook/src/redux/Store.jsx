import { legacy_createStore } from 'redux';
import countReducer from './Reducers';
export const Store = legacy_createStore(countReducer);