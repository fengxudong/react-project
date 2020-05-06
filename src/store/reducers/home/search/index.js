import newHotWordInit from "../../../state/home/search";
import newHotWordType from "../../../actionType/Home/search";
export default function (state=newHotWordInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === newHotWordType.CHANGE_NEW_HOT_WORD){
        state.newHotWord = payload;
    }
    if (type === newHotWordType.CHANGE_HISTORY_WORD){
        state.historyWord = payload;
    }
    return state;
}