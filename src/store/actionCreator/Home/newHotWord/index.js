import axios from "axios";
import newHotwordType from "../../../actionType/Home/newHotWord";

export function changeNewHotWord(payload) {
    return {
        type:newHotwordType.CHANGE_NEW_HOT_WORD,
        payload
    }
}

export default {
    getNewHotWord(){
        return async dispatch=>{
            const {data} = await axios.get("/Show/Search/getNewHotWord?version=6.1.1&referer=2");
            dispatch(changeNewHotWord(data))
        }
    }
}