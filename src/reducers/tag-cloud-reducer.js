
// constants
import {
    SUCCES_GET_TAGS,
    FILTER_TAGS,
    EDIT_MODE,
    UPDATE_TAGS,
    ADD_TAG,
    SORT_TAGS
} from '../constants/tag-cloud-constants'

// entities
import Tag from '../entities/Tag'

const initialState = {
   tags:[],
   filteredTags:[],
   removeMode:false
};

export const TagCloud = (state = initialState, action) => {
    switch (action.type) {

        case SUCCES_GET_TAGS:

            return Object.assign( {}, state, {
                tags: action.tags.map((tag) => new Tag(tag)),
                filteredTags: action.tags.map((tag) => new Tag(tag))
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
                tags: [...state.tags , new Tag(action.newTag)],
                filteredTags: [...state.filteredTags , new Tag(action.newTag)],
            });

        case SORT_TAGS:

            return Object.assign( {}, state, {
                tags: state.tags.concat().sort((a, b) => a.label > b.label ? 1: -1),
                filteredTags: state.filteredTags.concat().sort((a, b) => a.label > b.label ? 1: -1),
            });

        case UPDATE_TAGS:

            return Object.assign( {}, state, {
                tags: action.tags
            });

        default:
            return state;
    }
};