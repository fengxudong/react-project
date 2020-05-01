import React, {Component} from 'react';
import style from "../../assets/style/sass/selectCity.module.scss";
const back_ico = {
    left: 0,
    color:"red",
    background: `url('https://m.juooo.com/static/img/back_icon.754b906.png') no-repeat 0.4rem 50%)`,
    // background: `url(${require("../../assets/img/back_icon.png")}) no-repeat 0.4rem 50%)`,
    // background-size:" 0.53333rem 0.53333rem"
}
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
                       <span style={back_ico}  className={`${style.head_icon} ${style.back_icon}`}>返回</span>
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
                    字母侧边栏
                </div>
            </div>
        )
    }
}