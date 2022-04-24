import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import greetingReducer from '../features/greeting/greeting';

const reducer = combineReducers({ message: greetingReducer });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
