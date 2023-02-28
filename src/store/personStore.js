import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import personReducer from '../reducers/personReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const personStore = createStore(personReducer, composeEnhancers(applyMiddleware(thunk)));
