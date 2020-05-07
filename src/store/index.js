// 生成仓库 
import {
    createStore,
    applyMiddleware
} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk"
<<<<<<< HEAD
export default createStore(rootReducer,applyMiddleware(thunk))
=======

export default createStore(rootReducer, applyMiddleware(thunk))
>>>>>>> li
