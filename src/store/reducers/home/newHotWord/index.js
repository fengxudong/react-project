import newHotWordInit from "../../../state/home/newHotWord";
import newHotWordType from "../../../actionType/Home/newHotWord"
export default function (state=newHotWordInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === newHotWordType.CHANGE_NEW_HOT_WORD){
        state.newHotWord = payload;
    }
    return state;
}