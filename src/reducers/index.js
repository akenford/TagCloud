
// redux
import { combineReducers } from "redux";

// tag-cloud reducer
import { TagCloud } from "./tag-cloud-reducer";

// tag-info reducer
import { TagInfo } from "./tag-info-reducer";

// loading reducer
import { isLoaded } from "./is-loaded-reducer";

const rootReducer = combineReducers({
    TagCloud,
    isLoaded,
    TagInfo
});

export default rootReducer;
