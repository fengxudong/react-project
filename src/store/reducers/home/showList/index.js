import showListInit from "../../../state/home/showList";
import showListType from "../../../actionType/Home/showList"
export default function (state=showListInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if (type === showListType.CHANGE_SHOW_LIST){
        // console.log(11,payload);
        state.showList = payload.list;
        // state.page = payload.page;
    }
    return state;
}