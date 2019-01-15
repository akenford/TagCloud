
// constants
import { SET_SEARCH_BAR_VALUE } from '../constants/search-bar-constants'

const initialState = {
    value:''
};

export const SearchBar = (state = initialState, action) => {
    switch (action.type) {

        case SET_SEARCH_BAR_VALUE:

            return Object.assign( {}, state, {
                value: action.value
            });

        default:
            return state;
    }
}