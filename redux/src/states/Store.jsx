import { legacy_createStore } from 'redux';
import { todoReducer } from './Reducers';
export const Store = legacy_createStore(todoReducer);