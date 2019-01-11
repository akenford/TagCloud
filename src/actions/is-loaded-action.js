// constants
import { ASYNC_LOADING, ASYNC_LOADED } from '../constants/is-loaded-constants'

export const loading = (status) => (dispatch) => dispatch({ type: ASYNC_LOADING , status});

export const loaded = (status) => (dispatch) => dispatch({ type: ASYNC_LOADED , status});
