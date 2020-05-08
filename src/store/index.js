// 生成仓库 
import {
    createStore,
    applyMiddleware
} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
export default createStore(rootReducer,applyMiddleware(thunk))
// =======
// import thunk from "redux-thunk"
//
//
// export default createStore(rootReducer, applyMiddleware(thunk))
// >>>>>>> da7c7254dd06cd95b44ba56143333e8ded92b817
