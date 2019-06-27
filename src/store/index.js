import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import AllReducers from './allreducer'

const midleWare = applyMiddleware(thunk, logger)

const store = createStore(AllReducers, midleWare)

export default store