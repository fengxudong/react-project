import React, { Component } from 'react';
import style from "../assets/css/detail.module.css"
import img from "../assets/image/1.jpg"
export default class Detail extends Component {
    render() {
        return (
            <div>
                <div className={style.bg} style={{background:`url(require('../assets/image/1.jpg'))`}}>
                    {/* 头部 */}
                    <p className={style.head}>
                        <i className="iconfont icon-houtui"></i>
                        <span>演出详情</span> 
                        <i className="iconfont icon-fenxiang"></i>
                        <i className="iconfont icon-shouye"></i>
                    </p>
                    {/* 图片加描述 */}
                    <div className={style.left}>
                        <div><img src={img} alt="" style={{width:"110px",height:"140px"}}/></div>
                        <div>
                            <p>【演出延期】聚橙出品 |百老汇现象级原版音乐剧《来自远方》-深圳站</p>
                            <p>￥280-1080</p>
                        </div>
                    </div>
                </div>
                {/* 选座 */}
                <div className={style.select}>
                    <p>
                        <i className="iconfont icon-duihao"><span>可选座</span> </i>
                        <i className="iconfont icon-duihao"><span>电子票</span> </i>
                    </p>
                    <div>
                        <p>2020.06.12-06.14 <i className="iconfont icon-gengduo1"></i></p>
                        <p>深圳 | 南山文化中心剧院大剧场</p>
                        <p>南山区南山大道南头街62号</p>
                        <div>
                            <i className="iconfont icon-dingwei"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>橙plus卡</span>
                            <p> 开通送￥200 最高省108元   <span>立即开卡<i className="iconfont icon-gengduo1"></i></span></p>
                        </div>
                    </div>
                    <div className={style.free}></div>
                </div>
                {/* 优惠 */}
                <div className={style.sale}>
                    <div>
                        <p>
                            <span>优 &nbsp;&nbsp;&nbsp;惠：</span>
                            <div>折扣</div>
                            <span>优惠活动，指定票价8折 </span> 
                            <i className="iconfont icon-gengduo"></i>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span> VIP+&nbsp;&nbsp;&nbsp;：</span>
                            <span>V+会员享</span>
                            <span>国内免邮 + 双倍积分</span>
                            <i className="iconfont icon-gengduo1"></i>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>入  &nbsp;&nbsp;&nbsp;场：</span>
                            <span>入场1.1米以上儿童凭票进场，1.1米以下儿童谢绝入场。凭票入场，对号入座。</span> 
                        </p>
                    </div>
                </div>
                {/* 温馨提醒 */}
                <div className={style.intro}>
                    <div className={style.free}></div>
                    <div>
                        <p>
                            <span>温馨提醒</span> 
                            <i className="iconfont icon-gengduo1"></i>
                        </p>
                        <p>
                            配送说明 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            订票说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            确认订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            购票提醒
                        </p>
                    </div>
                    <div className={style.free}></div>
                </div>
                {/* 相关推荐 */}
                <div className={style.simi}>
                    <p>相关推荐</p>
                    <div className={style.film}>
                        <div>
                            <img src="https://image.juooo.com/group1/M00/04/04/rAoKNV3o3tCAbCKNAAB3v6NC4vs503.jpg" 
                            style={{width:"100%",height:"100%"}} alt=""/>
                        </div> 
                        <div>
                            <p>2020.06.04 - 06.06</p>
                            <p>聚橙制作 | 百老汇爱情音乐轻喜剧《第一次约会》中文版</p>
                            <p>深圳 | 南山文体中心剧院大剧院</p>
                            <div>
                                <div>可选座</div>
                                <div>套票</div>
                            </div>
                            <p>￥100 <span> 起</span></p>
                        </div>
                    </div>
                    <div className={style.film}>
                        <div>
                            <img src="https://image.juooo.com/group1/M00/04/04/rAoKNV3o3tCAbCKNAAB3v6NC4vs503.jpg" 
                            style={{width:"105px",height:"144px"}} alt=""/>
                        </div> 
                        <div>
                            <p>2020.06.04 - 06.06</p>
                            <p>聚橙制作 | 百老汇爱情音乐轻喜剧《第一次约会》中文版</p>
                            <p>深圳 | 南山文体中心剧院大剧院</p>
                            <div>
                                <div>可选座</div>
                                <div>套票</div>
                            </div>
                            <p>￥100 <span> 起</span></p>
                        </div>
                    </div>
                    <div className={style.film}>
                        <div>
                            <img src="https://image.juooo.com/group1/M00/04/04/rAoKNV3o3tCAbCKNAAB3v6NC4vs503.jpg" 
                            style={{width:"105px",height:"144px"}} alt=""/>
                        </div> 
                        <div>
                            <p>2020.06.04 - 06.06</p>
                            <p>聚橙制作 | 百老汇爱情音乐轻喜剧《第一次约会》中文版</p>
                            <p>深圳 | 南山文体中心剧院大剧院</p>
                            <div>
                                <div>可选座</div>
                                <div>套票</div>
                            </div>
                            <p>￥100 <span> 起</span></p>
                        </div>
                    </div>
                    <div>
                        查看更多演出
                        <i className="iconfont icon-gengduo1"></i>
                    </div>
                </div>
                {/* 底部 */}
                <div className={style.foot}>
                    <div>
                        <i className="iconfont icon-kefu"></i>
                        <p>客服</p> 
                    </div>
                    <div>
                        选座购买
                    </div>
                </div>
                    
                    
                 
            </div>
        )
    }
}
