import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise-middleware';
import homeReducer from './reducer/home.js';

const reducer = combineReducers({
  homeReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(reduxPromise())
));

export default store;