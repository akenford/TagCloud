
// redux
import { combineReducers } from "redux";

// tag reducer
import { TagCloud } from "./tag-cloud-reducer";

// loading reducer
import { isLoaded } from "./is-loaded-reducer";

const rootReducer = combineReducers({
    TagCloud,
    isLoaded
});

export default rootReducer;
