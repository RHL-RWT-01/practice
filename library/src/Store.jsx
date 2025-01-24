import { legacy_createStore } from 'redux';
import { rootReducer } from './reducers/BookReducer';
export const Store = legacy_createStore(rootReducer);