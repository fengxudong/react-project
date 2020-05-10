import homeInit from "../../../state/home/location";
import locationType from "../../../actionType/home/location"

export default function (state=homeInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    // 城市列表
    if (type === locationType.CHANGE_HOT_CITY_LIST){
        state.hotCityList = payload;
    }

    if (type === locationType.CHANGE_CITY){
        state.city = payload
    }
    if(type === locationType.CHANGE_SORTED_CITY_LIST){
        payload = Object.values(payload);
        state.sortedCityList = payload;
    }

    return state
}