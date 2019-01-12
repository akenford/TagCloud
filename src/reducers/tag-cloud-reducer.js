
// constants
import { SUCCES_GET_TAGS, FILTER_TAGS } from '../constants/tag-cloud-constants'

const initialState = {
   tags:[],
   filteredTags:[]
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


        default:
            return state;
    }
}