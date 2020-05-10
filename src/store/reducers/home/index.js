import homeInit from "../../state/home"
import homeType from "../../actionType/home";

import pubsub from "pubsub-js";
export default function (state = homeInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    //轮播
    if(type === homeType.UP_SLIDE_LIST){
        state.slide_list = payload;
        //console.log(state);
    }
    //分类

    if(type === homeType.UP_CLASSFIFY_TOP){
        state.classify_list_top = payload;
    }
    if(type === homeType.UP_CLASSFIFY_BOTTOM){
        state.classify_list_bottom = payload;
    }


    //vip
    if(type === homeType.UP_DISCOUNTLIST){
        state.discountList = payload;
    }
    //热门演出
    if(type === homeType.UP_HOT_SHOW_LIST){
        state.hots_show_list = payload;
    }
    //瀑布流
    if(type === homeType.UP_SHOW_LIST){
        // 遍历 判断奇数偶数下标 添加到两个数组中
        payload.list.forEach((v, i) => {
            if (state.list_lf.length > state.list_rg.length) {
                state.list_rg.push(payload.list[i]);
            } else {
                state.list_lf.push(payload.list[i]);
            }
        });
        state.page = payload.page;
        console.log(state.page);
        // 发布者
        pubsub.publish("boll");
    }
    //巡回演出
    if(type === homeType.UP_TOUR_LIST){
        state.tour_list = payload;
    }
    //橙plus卡
    if(type === homeType.UP_EQUITY_LIST){
        state.equity_list = payload;
    }
    if(type === homeType.UP_PLUS_DETAIL){
        state.plusDetail = payload;
    }
    return state;
}
