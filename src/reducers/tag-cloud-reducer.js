
// constants
import {
    SUCCES_GET_TAGS,
    FILTER_TAGS,
    EDIT_MODE,
    UPDATE_TAGS,
    ADD_TAG
} from '../constants/tag-cloud-constants'

const initialState = {
   tags:[],
   filteredTags:[],
   removeMode:false
};

export const TagCloud = (state = initialState, action) => {
    switch (action.type) {

        case SUCCES_GET_TAGS:

            return Object.assign( {}, state, {
                tags: action.tags,
                filteredTags: action.tags
            });

        case FILTER_TAGS:

            return Object.assign( {}, state, {
                filteredTags: action.filteredTags
            });

        case EDIT_MODE:

            return Object.assign( {}, state, {
                removeMode: action.removeMode
            });

        case ADD_TAG:

            return Object.assign( {}, state, {
                tags: state.tags.concat(action.newTag),
                filteredTags: state.tags.concat(action.newTag)
            });

        case UPDATE_TAGS:

            return Object.assign( {}, state, {
                tags: action.tags
            });

        default:
            return state;
    }
};