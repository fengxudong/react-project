// 为了挂载的元素不同，但是都想使用filters中的数据，目前的过滤器是局部过滤器
// 给价钱前面加上￥
const currency = function (v) {
    // console.log(v)
    return "￥" + v.toFixed(2);
};
const getNowTime = function (v) {
    // 将时间戳转为年月日的形式
    if(v){
        const time = new Date(v);
        return time.getFullYear() + "-" +
            ((time.getMonth() + 1)).toString().padStart(2, 0) + "-" +
            (time.getDate()).toString().padStart(2, 0) + " " +
            (time.getHours()).toString().padStart(2, 0) + ":" +
            (time.getMinutes()).toString().padStart(2, 0) + ":" +
            (time.getSeconds()).toString().padStart(2, 0);
    }else{
        return "无"
    }

}


export default {
    currency,
    getNowTime
}