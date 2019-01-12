// constants
import { SUCCES_GET_TAGS, FILTER_TAGS } from '../constants/tag-cloud-constants'
import { SUCCES_GET_TAG_BY_ID } from '../constants/tag-info-constants'

export const getTags = (tags) => (dispatch) => dispatch({ type: SUCCES_GET_TAGS , tags});

export const getTagById = (tag) => (dispatch) => dispatch({ type: SUCCES_GET_TAG_BY_ID , tag});

export const filterTagByValue = (filteredTags) => (dispatch) => dispatch({ type: FILTER_TAGS, filteredTags})
