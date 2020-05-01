import locationType from "../../../actionType/Home/location";
export default function (payload) {
    return {
        type:locationType.CHANGE_HOT_CITY_LIST,
        payload
    }
}