// 负责将reducer进行合并。
import home from "./home";
import location from "./home/location"
import showCategory from "./home/showCategory"
import my from "./my";
import ticket from "./ticket";
import theater from "./theater"

import {
    combineReducers
} from "redux";
const rootReducer = combineReducers({
    home,
    location,
    showCategory,
    my,
    ticket,
    theater
})
export default rootReducer;