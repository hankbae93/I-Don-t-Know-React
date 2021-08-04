import {
    FETCH_COMMENTS, 
    FETCH_COMMENTS_REQUEST, 
    FETCH_COMMENTS_SUCCESS, 
    FETCH_COMMENTS_FALIURE, 
} from './types';

const initialState = {
    items: [],
    loading: false,
    err: null
};

const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true,                
            }
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false          
            }
        case FETCH_COMMENTS_FALIURE:
            return {
                ...state,
                err: action.payload, 
                loading: false                    
            }
        default: 
            return state;
    }
}

export default commentsReducer;