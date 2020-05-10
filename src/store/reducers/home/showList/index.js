import showListInit from "../../../state/home/showList";

import showListType from "../../../actionType/home/showList"

export default function (state=showListInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if (type === showListType.CHANGE_SHOW_LIST){
        state.showList = payload.list;
        // state.page = payload.page;
    }
    return state;
}