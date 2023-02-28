import { createStore } from 'redux';
import personReducer from '../reducers/personReducer';

export const personStore = createStore(personReducer, []);
