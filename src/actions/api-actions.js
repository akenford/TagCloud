
// constants
import { PENDING_GET_TAGS, SUCCES_GET_TAGS, ERROR_GET_TAGS, FILTER_TAGS } from '../constants/tag-cloud-constants'
import { 
    PENDING_GET_TAG_BY_ID, 
    SUCCES_GET_TAG_BY_ID, 
    ERROR_GET_TAG_BY_ID
 } from '../constants/tag-info-constants'

import { ASYNC_LOADING, ASYNC_LOADED } from '../constants/is-loaded-constants'

// fetch
import { fetcher } from '../utills/Fetch/Fetch'

// utills
import Utils from "../utills/Utills/Utills"

export const getTags = () => {
    return  (dispatch, getState) => {
        dispatch({type: ASYNC_LOADING, isLoaded:false});

        dispatch({type: PENDING_GET_TAGS});

        return fetcher('http://5c2e44682fffe80014bd6922.mockapi.io/api/tags', {
            method: 'GET',
        }).then( (result) => {

            dispatch({type: ASYNC_LOADED, isLoaded:true});

            dispatch({
                type: SUCCES_GET_TAGS,
                tags: result
            })
            dispatch({
                type: FILTER_TAGS,
                filteredTags: Utils.filterArray(getState().TagCloud.filteredTags, getState().SearchBar.value )
            })
            })
            .catch( () =>
                dispatch({type: ERROR_GET_TAGS})
            );
    }
};

export const getTagById = (id) => {
    return (dispatch) => {
        dispatch({type: ASYNC_LOADING, isLoaded:false});

        dispatch({type: PENDING_GET_TAG_BY_ID});

        return fetcher('http://5c2e44682fffe80014bd6922.mockapi.io/api/tags', {
            method: 'GET',
        }).then( (result) => {

            dispatch({type: ASYNC_LOADED, isLoaded:true});

            dispatch({
                type: SUCCES_GET_TAG_BY_ID,
                tag:result.find(item => item.id === id)
            })

            })
            .catch( () =>
                dispatch({type: ERROR_GET_TAG_BY_ID})
            );
    }
};
