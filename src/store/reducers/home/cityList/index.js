import cityListInit from "../../../state/home/cityList";
import cityListType from "../../../actionType/Home/cityList"
export default function (state=cityListInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if (type === cityListType.CHANGE_CITY_LIST){
        state.cityList = payload
    }

    if (type === "CHANGE_CITY1"){
        // console.log(111,payload);
        state.city_id = payload.city_id;
    }

    return state
}