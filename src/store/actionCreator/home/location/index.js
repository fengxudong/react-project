import locationType from "../../../actionType/home/location";
import axios from "axios";
export  function changeHotCityList(payload) {
    return {
    type:locationType.CHANGE_HOT_CITY_LIST,
    payload
}
}

export function changeCity(payload) {
    return {
        type:locationType.CHANGE_CITY,
        payload
    }
}

export function changeSortedCityList(payload) {
    return {
        type:locationType.CHANGE_SORTED_CITY_LIST,
        payload
    }
}

export default {
   getHotCityList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/city/city/getHotCityList?version=6.1.1&referer=2");
            dispatch(changeHotCityList(data.hot_city_List));
        }
    },

    getCity(){
      return dispatch=>{
          //eslint-disable-next-line
          AMap.plugin('AMap.CitySearch', function () {
              //eslint-disable-next-line
              var citySearch = new AMap.CitySearch()
              citySearch.getLocalCity(function (status, result) {
                  if (status === 'complete' && result.info === 'OK') {
                      // 查询成功，result即为当前所在城市信息
                      localStorage.city = result.city;
                      dispatch(changeCity(result.city));
                  }
              })
          })
      }
    },

    getSortedCityList(){
       return async  (dispatch)=>{
            const {data} = await axios.get("/city/city/getSortedCityList?version=6.1.1&referer=2");
            dispatch(changeSortedCityList(data))
        }
    }
}