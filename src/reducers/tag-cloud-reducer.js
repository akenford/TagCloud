
// constants
import { SUCCES_GET_TAGS } from '../constants/tag-cloud-constants'

const initialState = {
   tags:[]
};

export const TagCloud = (state = initialState, action) => {
    switch (action.type) {

        case SUCCES_GET_TAGS:

            return Object.assign( {}, state, {
                tags: action.tags
            });


        default:
            return state;
    }
}