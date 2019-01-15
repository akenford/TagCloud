
// redux
import { combineReducers } from "redux";

// tag-cloud reducer
import { TagCloud } from "./tag-cloud-reducer";

// tag-info reducer
import { TagInfo } from "./tag-info-reducer";

// loading reducer
import { isLoaded } from "./is-loaded-reducer";

// searchBar reducer
import { SearchBar } from "./search-bar-reducer"

const rootReducer = combineReducers({
    TagCloud,
    isLoaded,
    TagInfo,
    SearchBar
});

export default rootReducer;
