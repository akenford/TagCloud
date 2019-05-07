
// constants
import { GET_TAG_BY_ID } from '../constants/tag-info-constants'

const initialState = {
   tagInfo:{}
};

export const TagInfo = (state = initialState, action) => {

    switch (action.type) {

        case GET_TAG_BY_ID:

            return Object.assign( {}, state, {
                tagInfo: action.newTag
            });

        default:
            return state;
    }
}