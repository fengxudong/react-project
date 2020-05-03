import React, {Component} from 'react';
import style from "../../assets/style/sass/selectCity.module.scss";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import {changeSortedCityList} from "../../store/actionCreator/Home/location";
import locationCreator from "../../store/actionCreator/Home/location";
class SelectCity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.index = 1
    }

    render() {
        return (
                <div className={style.city}>
                    {/*头部*/}
                    <header className={style.head_nav}>
                        <img onClick={()=>{
                           this.props.history.push("/")
                        }} src="https://m.juooo.com/static/img/back_icon.754b906.png" style={{
                            width:'0.53333rem',
                            height:'0.53333rem'
                        }} className={`${style.head_icon} ${style.back_icon}`} alt=""/>
                       <h3 className={style.title}>城市选择</h3>
                    </header>
                    {/*除了头部*/}
                   <div className={style.main}>
                       <section className={style.city_block} id={"position"}>
                           <div>
                               {/*定位城市*/}
                               <div className={style.city_block_con}>
                                   <span className={style.city_block_con_tip}>定位城市</span>
                                   <ul className={style.city_block_con_wrap}>
                                       <li className={`${style.city_block_con_item} ${style.location_item}`}>定位失败，点击重试</li>
                                   </ul>
                               </div>
                               {/*热门城市*/}
                               <div className={style.city_block_con}>
                                   <span id={"hot"} className={style.city_block_con_tip}>热门城市</span>
                                   <ul className={style.city_block_con_wrap}>
                                       {
                                           this.props.hotCityList.map(v=>{
                                               return (
                                                   <div key={v.id}>
                                                       <li onClick={()=>{
                                                           this.props.history.push("/"+v.id)
                                                       }} className={`${style.city_block_con_item} ${style.hots_item}`}>
                                                           {v.name}
                                                       </li>
                                                   </div>
                                               )
                                           })
                                       }
                                   </ul>
                               </div>
                           </div>
                       </section>

                       {/*字母对应地址*/}
                       <section className={style.city_block_row}>
                           <div>
                               {
                                   this.props.sortedCityList.map(v=>{
                                       return (
                                           <div key={v.id}>
                                               <span className={style.city_block__row__con__letter} id={v.id}>{v.id}</span>
                                               {
                                                   v.list.map(v=>{
                                                       return (
                                                           <ul className={style.city_block__row__con__wrap} key={v.id}>
                                                               <li onClick={()=>{
                                                                   this.props.history.push("/")
                                                               }} className={style.city_block__row__con__column}>{v.name}</li>
                                                           </ul>
                                                       )
                                                   })
                                               }
                                           </div>
                                       )
                                   })
                               }
                           </div>
                       </section>
                       {/*字母侧边栏*/}
                       <section className={style.city_nav}>
                           <span className={style.city_nav_lab}><a href="#position">定位</a></span>
                           <span className={style.city_nav_lab}><a href="#position">热门</a></span>
                           {/*<span className={`${style.city_nav_lab} ${style.active}`}>A</span>*/}
                           {
                               this.props.sortedCityList.map(v=>{
                                   return (
                                       <div key={v.id}>
                                           <span className={style.city_nav_lab}><a href={"#"+v.id}>{v.id}</a></span>
                                       </div>
                                   )
                               })
                           }
                       </section>
                   </div>
                </div>
        )
    }

    componentDidMount() {
        this.props.getHotCityList.call(this);
        this.props.getSortedCityList.call(this);
    }


}
function mapStateToProps({location}) {
    return {
        hotCityList:location.hotCityList,
        sortedCityList:location.sortedCityList,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(locationCreator,dispatch);
    // return {
        // getHotCityList(){
        //     dispatch(locationCreator.getHotCityList());
        // },
        // getSortedCityList(){
        //     // const getSortedCityList = async dispatch=>{
        //     //     const {data} = await this.$axios.get("/city/city/getSortedCityList?version=6.1.1&referer=2");
        //     //     dispatch(changeSortedCityList(data))
        //     // }
        //     dispatch(locationCreator.getSortedCityList())
        // }
    // }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectCity);