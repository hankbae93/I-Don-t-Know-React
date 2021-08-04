import { combineReducers } from 'redux';
import subscribersReducer from './subscribers/reducer';
import viewReducer from './views/reducer';
import commentsReducer from './comments/reducer';

const rootReducer = combineReducers({
    views: viewReducer,
    subscribers: subscribersReducer,
    comments: commentsReducer
})

export default rootReducer;