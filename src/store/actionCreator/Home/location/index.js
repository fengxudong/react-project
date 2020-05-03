import locationType from "../../../actionType/Home/location";
import axios from "axios";
export  function changeHotCityList(payload) {
    return {
    type:locationType.CHANGE_HOT_CITY_LIST,
    payload
}
}

export function changeSortedCityList(payload) {
    return {
        type:locationType.CHANGE_SORTED_CITY_LIST,
        payload
    }
}

export default {
   getHotCityList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/city/city/getHotCityList?version=6.1.1&referer=2");
            dispatch(changeHotCityList(data.hot_city_List));
        }
    },

    getSortedCityList(){
       return async  (dispatch)=>{
            const {data} = await axios.get("/city/city/getSortedCityList?version=6.1.1&referer=2");
            dispatch(changeSortedCityList(data))
        }
    }
}