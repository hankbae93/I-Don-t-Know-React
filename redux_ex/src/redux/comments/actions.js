import {
    FETCH_COMMENTS, 
    FETCH_COMMENTS_REQUEST, 
    FETCH_COMMENTS_SUCCESS, 
    FETCH_COMMENTS_FALIURE, 
} from './types';

export const fetchCommentsRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST,                
    }
}

export const fetchCommentsSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFailure = (error) => {
    return {
        type: FETCH_COMMENTS_FALIURE, 
        payload: error
    }
}

export const fetchComments = () => {
    return (dispatch) => { // thunk는 액션함수를 넘겨준다
        dispatch(fetchCommentsRequest())
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(comments => {
            dispatch(fetchCommentsSuccess(comments));            
        })
        .catch(error => dispatch(fetchCommentsFailure(error)));
    }
}