import { legacy_createStore } from 'redux';
import { rootReducer } from './Reducers';
export const Store = legacy_createStore(rootReducer);