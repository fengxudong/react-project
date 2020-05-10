// import axios from "axios";
// import searchType from "../../../actionType/home/search"
//
// export function changeNewHotWord(payload) {
//     return {
//         type:searchType.CHANGE_NEW_HOT_WORD,
//         payload
//     }
// }
//
// export default function () {
//     return async dispatch=>{
//         const {data} = await axios.get("/Show/Search/getNewHotWord?version=6.1.1&referer=1");
//         dispatch(changeNewHotWord(data));
//     }
// }