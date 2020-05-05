import homeInit from "../../state/home";
import homeType from "../../actionType/home"
export default function (state = homeInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    //轮播
    if(type === homeType.UP_SLIDE_LIST){
        state.slide_list = payload;
        //console.log(state);
    }
    //分类
    if(type === homeType.UP_CLASSFIFY_LIST){
        state.classify_list = payload;
    }
    //vip
    if(type === homeType.UP_DISCOUNTLIST){
        state.discountList = payload;
    }
    //热门演出
    if(type === homeType.UP_HOT_SHOW_LIST){
        state.hots_show_list = payload;
    }
    //列表
    if(type === homeType.UP_SHOW_LIST){
        state.page = payload.page;
        state.showList = payload.list;
    }
    return state;
}