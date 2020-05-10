// 负责将reducer进行合并。
import home from "./home";
import location from "./home/location";
import showCategory from "./home/showCategory";
import showList from "./home/showList";
import search from "./home/search";
import calendar from "./home/calendar"
import cityList from "./home/cityList"

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
    showList,
    search,
    calendar,
    cityList,

    my,
    ticket,
    theater
})
export default rootReducer;