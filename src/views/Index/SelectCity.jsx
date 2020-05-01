import React, {Component} from 'react';
import style from "../../assets/style/sass/selectCity.module.scss";
// const back_ico = {
//     left: 0,
//     color:"red",
//     background: `url('https://m.juooo.com/static/img/back_icon.754b906.png') no-repeat 0.4rem 50%)`,
//     // background: `url(${require("../../assets/img/back_icon.png")}) no-repeat 0.4rem 50%)`,
//     // background-size:" 0.53333rem 0.53333rem"
// }
export default class SelectCity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className={style.city}>
                    {/*头部*/}
                    <header className={style.head_nav}>
                       {/*<span style={back_ico}  className={`${style.head_icon} ${style.back_icon}`}>返回</span>*/}
                        <img src="https://m.juooo.com/static/img/back_icon.754b906.png" style={{
                            width:'0.53333rem',
                            height:'0.53333rem'
                        }} className={`${style.head_icon} ${style.back_icon}`} alt=""/>
                       <h3 className={style.title}>城市选择</h3>
                    </header>
                    {/*除了头部*/}
                    <section className={style.city_block}>
                       <div className={style.city_block_wrapper}>
                           {/*定位城市*/}
                           <div className={style.city_block_con}>
                                <span className={style.city_block_con_tip}>定位城市</span>
                               <ul className={style.city_block_con_wrap}>
                                   <li className={`${style.city_block_con_item} ${style.location_item}`}>定位失败，点击重试</li>
                               </ul>
                           </div>
                           {/*热门城市*/}
                           <div className={style.city_block_con}>
                               <span className={style.city_block_con_tip}>热门城市</span>
                               <ul className={style.city_block_con_wrap}>
                                <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li> <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                   全国
                               </li>
                                   <li className={`${style.city_block_con_item} ${style.hots_item}`}>
                                       全国
                                   </li>

                               </ul>
                           </div>
                       </div>
                    </section>

                    {/*字母对应地址*/}
                    <section className={style.city_block_row}>
                        <div>
                            <span className={style.city_block__row__con__letter}>A</span>
                            <ul className={style.city_block__row__con__wrap}>
                                <li className={style.city_block__row__con__column}>澳门</li>
                            </ul>
                        </div>
                    </section>
                    {/*字母侧边栏*/}
                    <section className={style.city_nav}>
                        <span className={style.city_nav_lab}>定位</span>
                        <span className={style.city_nav_lab}>热门</span>
                        <span className={`${style.city_nav_lab} ${style.active}`}>A</span>
                        <span className={style.city_nav_lab}>B</span>
                        <span className={style.city_nav_lab}>C</span>
                        <span className={style.city_nav_lab}>D</span>
                        <span className={style.city_nav_lab}>E</span>
                        <span className={style.city_nav_lab}>F</span>
                        <span className={style.city_nav_lab}>G</span>
                    </section>
                </div>
            </div>
        )
    }

    // async componentDidMount() {
    //     const {data} = await this.$axios.get("/city/city/getHotCityList?version=6.1.1&referer=2");
    //     console.log(data);
    // }
}