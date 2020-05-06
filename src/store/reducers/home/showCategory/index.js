import showCategoryInit from "../../../state/home/showCategory"
import showCategoryType from "../../../actionType/Home/showCategory"
export default function (state=showCategoryInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
if (type === showCategoryType.CHANGE_SHOW_CATEGORY_LIST){
    state.showCategoryList = payload;
}
    if (type === "CHANGE_CATEGORY"){
        console.log(222,payload);
        if (payload){
            if (payload.category){
                state.category = payload.category;
            }
        }
    }
return state;
}