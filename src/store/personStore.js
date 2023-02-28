import { createStore, compose } from 'redux';
import personReducer from '../reducers/personReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const personStore = createStore(personReducer, composeEnhancers());
