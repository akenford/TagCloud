// constants
import { SET_SEARCH_BAR_VALUE } from '../constants/search-bar-constants'

export const setSearchBarValue = (value) => (dispatch) => dispatch({ type: SET_SEARCH_BAR_VALUE , value});