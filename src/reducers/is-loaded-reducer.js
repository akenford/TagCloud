
// constants
import { ASYNC_LOADING, ASYNC_LOADED } from '../constants/is-loaded-constants'

const initialState = {
    isLoaded:false
};

export const isLoaded = (state = initialState, action) => {
    switch (action.type) {

        case ASYNC_LOADING:

            return Object.assign( {}, state, {
                isLoaded: action.isLoaded
            });

        case ASYNC_LOADED:

            return Object.assign( {}, state, {
                isLoaded: action.isLoaded
            });

        default:
            return state;
    }
}