import cityListType from "../../../actionType/home/cityList"
import axios from "axios"
export function changeCityList(payload) {
    return {
        type:cityListType.CHANGE_CITY_LIST,
        payload
    }
}

export default {
    getCityList(){
        return async dispatch=>{
            const {data} = await axios.get("/city/city/getCityList");
            dispatch(changeCityList(data.city_list));
        }
    }
}