import axios from "axios";
import showListType from "../../../actionType/Home/showList"
export function changeShowList(payload) {
    return {
        type: showListType.CHANGE_SHOW_LIST,
        payload
    }
}

export default {
    getShowList({ city_id=0,category=0,keywords='',page=1}={}) {
        return async dispatch => {
            const {data} = await axios.get("/Show/Search/getShowList", {
                params: {
                    city_id,
                    category,
                    keywords,
                    page
                }
            })
            dispatch(changeShowList(data))
        }
    }
}