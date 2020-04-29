// 负责将reducer进行合并。
import home from "./home";
import my from "./my";
import ticket from "./ticket";
import theater from "./theater"
import {
    combineReducers
} from "redux";
const rootReducer = combineReducers({
    home,
    my,
    ticket,
    theater
})
export default rootReducer;