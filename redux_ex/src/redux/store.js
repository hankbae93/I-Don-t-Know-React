import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const middleware = [logger];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;