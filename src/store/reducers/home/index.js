import homeInit from "../../state/home"
export default function (state = homeInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    return state;
}