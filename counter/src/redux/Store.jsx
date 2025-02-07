import { legacy_createStore } from 'redux';
import countReducer from './Reducer';

export const Store = legacy_createStore(countReducer);
