import myInit from "../../state/my"
export default function (state = myInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    return state;
}