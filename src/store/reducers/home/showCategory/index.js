import showCategoryInit from "../../../state/home/showCategory"
import showCategoryType from "../../../actionType/Home/showCategory"
export default function (state=showCategoryInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
if (type === showCategoryType.CHANGE_SHOW_CATEGORY_LIST){
    state.showCategoryList = payload;
}
if (type === showCategoryType.CHANGE_SHOW_LIST){
    state.showList = payload.list;
    // state.page = payload.page;
}
return state;
}