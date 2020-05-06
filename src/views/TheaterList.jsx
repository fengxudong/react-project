import React, { Component } from 'react'
import style from "../assets/css/theaterlist.module.css"
import img from "../assets/image/1.jpg"
export default class TheaterList extends Component {
    render() {
        return (
            <div>
                <div className={style.main}>
                    {/* 头部 */}
                    <div className={style.bg}>
                        <p>
                            <i className="iconfont icon-houtui"></i>
                        </p>
                        <div className={style.content}>
                            <div>
                                <div className={style.cirle} style={{background:`url(require('../assets/image/1.jpg'))`}}></div>
                                <div>
                                    <p>南山文体中心</p>
                                    <p>93 场在售演出</p>
                                </div>
                            </div>
                            <p>深圳 | 广东省深圳市南山区南山大道和南头街交汇处</p>
                            <div>
                                <i className="iconfont icon-dingwei"></i>
                            </div>
                        </div>
                    </div>
                    {/* 热门演出 */}
                    <div className={style.hot}>
                        <p>热门演出</p>
                        <div className={style.film}>
                            <div>
                                <img src={img} style={{width:"100%",height:"100%"}} alt=""/>
                            </div> 
                            <div>
                                <p>2020.06.12 - 06.14</p>
                                <div>【演出延期】聚橙出品 |百老汇<br/>现象级原版音乐剧《来自远方》<br/>-深圳站</div>
                                <p>深圳 | 南山文体中心剧院大剧院</p>
                                <div>
                                    <div>电子票</div>
                                    <div>可选座</div>
                                    <div>限时8折起</div>
                                </div>
                                <p>￥280 <span> 起</span></p>
                            </div>
                        </div>
                        <div className={style.film}>
                            <div>
                                <img src={img} style={{width:"100%",height:"100%"}} alt=""/>
                            </div> 
                            <div>
                                <p>2020.06.12 - 06.14</p>
                                <div>【演出延期】聚橙出品 |百老汇<br/>现象级原版音乐剧《来自远方》<br/>-深圳站</div>
                                <p>深圳 | 南山文体中心剧院大剧院</p>
                                <div>
                                    <div>电子票</div>
                                    <div>可选座</div>
                                    <div>限时8折起</div>
                                </div>
                                <p>￥280 <span> 起</span></p>
                            </div>
                        </div>
                        <div className={style.film}>
                            <div>
                                <img src={img} style={{width:"100%",height:"100%"}} alt=""/>
                            </div> 
                            <div>
                                <p>2020.06.12 - 06.14</p>
                                <div>【演出延期】聚橙出品 |百老汇<br/>现象级原版音乐剧《来自远方》<br/>-深圳站</div>
                                <p>深圳 | 南山文体中心剧院大剧院</p>
                                <div>
                                    <div>电子票</div>
                                    <div>可选座</div>
                                    <div>限时8折起</div>
                                </div>
                                <p>￥280 <span> 起</span></p>
                            </div>
                        </div>
                        <div className={style.film}>
                            <div>
                                <img src={img} style={{width:"100%",height:"100%"}} alt=""/>
                            </div> 
                            <div>
                                <p>2020.06.12 - 06.14</p>
                                <div>【演出延期】聚橙出品 |百老汇<br/>现象级原版音乐剧《来自远方》<br/>-深圳站</div>
                                <p>深圳 | 南山文体中心剧院大剧院</p>
                                <div>
                                    <div>电子票</div>
                                    <div>可选座</div>
                                    <div>限时8折起</div>
                                </div>
                                <p>￥280 <span> 起</span></p>
                            </div>
                        </div>
                        <div className={style.film}>
                            <div>
                                <img src={img} style={{width:"100%",height:"100%"}} alt=""/>
                            </div> 
                            <div>
                                <p>2020.06.12 - 06.14</p>
                                <div>【演出延期】聚橙出品 |百老汇<br/>现象级原版音乐剧《来自远方》<br/>-深圳站</div>
                                <p>深圳 | 南山文体中心剧院大剧院</p>
                                <div>
                                    <div>电子票</div>
                                    <div>可选座</div>
                                    <div>限时8折起</div>
                                </div>
                                <p>￥280 <span> 起</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 底部 */}
                <div className={style.foot}>
                    没有更多了
                </div>
            </div>
        )
    }
}
