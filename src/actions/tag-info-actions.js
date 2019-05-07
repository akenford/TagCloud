// constansts
import { GET_TAG_BY_ID } from '../constants/tag-info-constants';

export const getTagById = (id) => (dispatch, getState) => {
    dispatch({ type: GET_TAG_BY_ID, newTag:getState().TagCloud.tags.find(item => item.id === id) });
};

