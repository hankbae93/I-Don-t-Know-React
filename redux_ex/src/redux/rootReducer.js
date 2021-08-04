import { combineReducers } from 'redux';
import subscribersReducer from './subscribers/reducer';
import viewReducer from './views/reducer';

const rootReducer = combineReducers({
    views: viewReducer,
    subscribers: subscribersReducer
})

export default rootReducer;