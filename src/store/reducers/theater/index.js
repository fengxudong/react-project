import theaterInit from "../../state/theater"
export default function (state = theaterInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    return state;
}