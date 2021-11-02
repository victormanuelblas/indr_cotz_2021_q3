import {COTZ_GET_PROS_LIST, COTZ_SET_PROS_INFO, COTZ_SET_PROS_AMOUNTS} from '../types';

export default (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case COTZ_GET_PROS_LIST:
            return {
                ...state,
                prospectList: payload
            }
        case COTZ_SET_PROS_INFO:
            return {
                ...state,
                prospectSelc: payload
            }
        case COTZ_SET_PROS_AMOUNTS:
            return {
                ...state,
                prospectAmounts: payload
            }
        default:
            return state;
    }
}