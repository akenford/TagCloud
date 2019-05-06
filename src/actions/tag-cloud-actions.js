// constants
import { FILTER_TAGS, EDIT_MODE, UPDATE_TAGS, ADD_TAG, SORT_TAGS } from '../constants/tag-cloud-constants'

export const filterTagByValue = (filteredTags) => (dispatch) => dispatch({ type: FILTER_TAGS, filteredTags });

export const switchRemoveMode = (removeMode) => (dispatch) => dispatch({ type: EDIT_MODE, removeMode });

export const updateTags = (tags) => (dispatch) => dispatch({ type: UPDATE_TAGS, tags });

export const addTag = (newTag) => (dispatch) => {
    dispatch({ type: ADD_TAG, newTag });
    dispatch({ type: SORT_TAGS })
};

