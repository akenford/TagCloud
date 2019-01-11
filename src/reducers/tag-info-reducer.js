
// constants
import { SUCCES_GET_TAG_BY_ID } from '../constants/tag-info-constants'

const initialState = {
   tag:{}
};

export const TagInfo = (state = initialState, action) => {
    switch (action.type) {

        case SUCCES_GET_TAG_BY_ID:

            return Object.assign( {}, state, {
                tag: action.tag
            });


        default:
            return state;
    }
}