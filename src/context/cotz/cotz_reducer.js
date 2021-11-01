import {COTZ_GET_PROS_LIST, COTZ_GET_PROS, COTZ_CARS_INFO, COTZ_POST_INFO} from '../types';

export default (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case COTZ_GET_PROS_LIST:
            return {
                ...state,
                prospectList: payload
            }
        case COTZ_GET_PROS:
            return {
                ...state,
                prospectSelc: payload
            }
        case COTZ_CARS_INFO:
            return {
                ...state,
                carInfo: payload
            }
        case COTZ_POST_INFO:
            return {
                ...state,
                postInfo: payload
            }
        default:
            return state;
    }
}