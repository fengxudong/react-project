import homeInit from "../../state/home";
import locationR from "./location"
export default function (state = homeInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    return state;
}

export const location = {
    locationR
}