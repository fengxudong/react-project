import showCategoryType from "../../../actionType/Home/showCategory"
import axios from "axios";

export  function changeShowCategoryList(payload) {
    return{
        type:showCategoryType.CHANGE_SHOW_CATEGORY_LIST,
        payload,
    }
}


export default {
    getShowCategoryList(){
       return async  dispatch=>{
            const {data} = await axios.get("/Show/Index/getShowCategoryList?version=6.1.1&referer=2");
            dispatch(changeShowCategoryList(data))
        }
    }

}