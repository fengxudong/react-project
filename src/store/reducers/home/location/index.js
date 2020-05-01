import homeInit from "../../../state/home/location";
export default function (state=homeInit,{type,payload}) {
    state.hotCityList = JSON.parse(JSON.stringify(state.hotCityList));
    state.sortedCityList = JSON.parse((JSON.stringify(state.sortedCityList)));
    // console.log(type)
    return state
}