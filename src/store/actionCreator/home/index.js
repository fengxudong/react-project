import homeType from "../../actionType/home";

//轮播
export function changeSlideList(payload) {
    return {
        type: homeType.UP_SLIDE_LIST,
        payload
    }
}

//分类
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

//热门
export function changeHotShowList(payload) {
    return {
        type: homeType.UP_HOT_SHOW_LIST,
        payload
    }
}

//瀑布流
export function changeShowList(payload) {
    return {
        type: homeType.UP_SHOW_LIST,
        payload
    }
}
//巡回演出
export function changeTourList(payload) {
    return {
        type: homeType.UP_TOUR_LIST,
        payload
    }
}
//橙plus卡
export function changeEquityList(payload) {
    return {
        type: homeType.UP_EQUITY_LIST,
        payload
    }
}
export function changePlusDetail(payload) {
    return {
        type: homeType.UP_PLUS_DETAIL,
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
    //vip
    getDiscountList() {
        return async dispatch => {
            const {data} = await this.$axios.get("/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2");
            // console.log("数据2", data);
            //更新
            dispatch(changeDiscountList(data.discountList));
        }
    },
    //热门演出
    getHotShowList() {
        return async dispatch => {
            const {data} = await this.$axios.get("/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2");
            //console.log("数据2", data);
            //更新
            dispatch(changeHotShowList(data.hots_show_list));
        }
    },
    //瀑布流
    getShowList(page = 1) {
        return async dispatch => {
            const url = `/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=${page}&referer_type=index&version=6.1.1&referer=2`
            const {data} = await this.$axios.get(url);
            // console.log("数据2", data);
            //更新
            dispatch(changeShowList(data));
        }
    },
    //巡回演出
    getTourList(){
        return async dispatch=>{
            const {data} = await this.$axios.get("/show/tour/getList?version=6.1.1&referer=2");
            console.log(data.list);
            dispatch(changeTourList(data.list))
         }
    },
    //橙plus卡
    getEquityList(){
        return async dispatch=>{
            const {data} = await this.$axios.get("/vip/index/getVipRule?vip_rule_id=1&type=0&version=6.1.1&referer=2");
            console.log(data.vip_rule_data);
            dispatch(changeEquityList(data.vip_rule_data.equity_list))
            dispatch(changePlusDetail(data.vip_rule_data.use_rule))
        }
    }
}