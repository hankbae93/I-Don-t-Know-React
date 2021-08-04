import {
    ADD_VIEW
} from './types';

export const addView = (number) => {
    return {
        type: ADD_VIEW,
        payload: Number(number)
    }
}