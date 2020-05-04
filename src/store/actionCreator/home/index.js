import homeType from "../../actionType/home";

export function changeSlideList(payload) {
    return {
        type: homeType.UP_SLIDE_LIST,
        payload
    }
}

export function changeClassfiyList(payload) {
    return {
        type: homeType.UP_CLASSFIFY_LIST,
        payload
    }
}
export function changeDiscountList(payload) {
    return {
        type: homeType.UP_DISCOUNTLIST,
        payload
    }
}
export function changeHotShowList(payload) {
    return {
        type: homeType.UP_HOT_SHOW_LIST,
        payload
    }
}
export default {
    //获取轮播图
    getSlideList() {
        return async dispatch => {
            const {data} = await this.$axios.get("/home/index/getClassifyHome");
            // console.log("数据", data);
            //更新
            dispatch(changeSlideList(data.slide_list));
            dispatch(changeClassfiyList(data.classify_list));
        }
    },
    getDiscountList(){
        return async dispatch => {
            const {data} = await this.$axios.get("/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2");
            // console.log("数据2", data);
            //更新
            dispatch(changeDiscountList(data.discountList));
        }
    },
    getHotShowList(){
        return async dispatch => {
            const {data} = await this.$axios.get("/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2");
            console.log("数据2", data);
            //更新
            dispatch(changeHotShowList(data.hots_show_list));
        }
    }
}