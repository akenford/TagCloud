// constants
import { SUCCES_GET_TAGS } from '../constants/tag-cloud-constants'

export const getTags = (tags) => (dispatch) => dispatch({ type: SUCCES_GET_TAGS , tags});
