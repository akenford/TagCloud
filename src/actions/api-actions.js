
// constants
import { PENDING_GET_TAGS, SUCCES_GET_TAGS, ERROR_GET_TAGS } from '../constants/tag-cloud-constants'
import { ASYNC_LOADING, ASYNC_LOADED } from '../constants/is-loaded-constants'

// fetch
import { fetcher } from '../utills/Fetch/Fetch'

export const getTags = () => {
    return function (dispatch) {
        dispatch({type: ASYNC_LOADING, isLoaded:false});

        dispatch({type: PENDING_GET_TAGS});

        return fetcher('http://5c2e44682fffe80014bd6922.mockapi.io/api/tags', {
            method: 'GET',
        }).then( (result) => {

            dispatch({type: ASYNC_LOADED, isLoaded:true});

            dispatch({
                type: SUCCES_GET_TAGS,
                tags:result
            })

            })
            .catch( error =>
                dispatch({type: ERROR_GET_TAGS})
            );
    }
};
