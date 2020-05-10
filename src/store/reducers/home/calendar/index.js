import calendarInit from "../../../state/home/calendar";
import calendarType from "../../../actionType/home/calendar"

export default function (state=calendarInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === calendarType.CHANGE_CALENDAR){
        state.calendar = payload
    }
    return state
}