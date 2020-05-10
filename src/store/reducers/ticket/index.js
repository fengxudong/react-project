import ticketInit from "../../state/ticket"
export default function (state = ticketInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    return state;
}