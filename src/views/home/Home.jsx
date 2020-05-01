import React, {Component} from 'react'
import style from "./home.module.css";

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                {/*  头部*/}
                <div className={style.head}>
                    <div className={style.headAddress}>
                        <i className="iconfont icon-dizhi"></i>
                        <span className={style.headAddressName}>
                            西安
                        </span>
                    </div>
                    <div className={style.headSearch}>
                        <i className="iconfont icon-sousuo"></i>
                        <span>搜索热门演出</span>
                    </div>
                    <div className={style.headCal}>
                        <span>
                            <img src={require("../../assets/img/cal.png")} alt=""/>
                        </span>
                    </div>
                </div>
                {/*主体*/}
                <main>
                    <section className={style.mainSection}>
                        {/*轮播*/}
                        <div className={style.banner}>
                            <div className={style.bannerSwitch}></div>
                        </div>

                        {/* 演唱会*/}
                        <section className={style.adverSection}>
                            <div className={style.labelItem}>
                                <div>
                                    <a href="#">
                                        <i className="iconfont icon-sousuo"></i>
                                        <span>演唱会</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i className="iconfont icon-sousuo"></i>
                                        <span>演唱会</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i className="iconfont icon-sousuo"></i>
                                        <span>演唱会</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i className="iconfont icon-sousuo"></i>
                                        <span>演唱会</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i className="iconfont icon-sousuo"></i>
                                        <span>演唱会</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i className="iconfont icon-sousuo"></i>
                                        <span>演唱会</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i className="iconfont icon-sousuo"></i>
                                        <span>演唱会</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i className="iconfont icon-sousuo"></i>
                                        <span>演唱会</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i className="iconfont icon-sousuo"></i>
                                        <span>演唱会</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i className="iconfont icon-sousuo"></i>
                                        <span>演唱会</span>
                                    </a>
                                </div>
                            </div>

                            {/* vip*/}
                            <section className={style.vipSection}>
                                <div className={style.vipDiv}>
                                    <div>
                                        <img src={require("../../assets/img/vip.png")} alt=""/>
                                        vip+会员尊享权益
                                    </div>
                                    <div>
                                        99元/年
                                        <span className={"iconfont icon-xiayiye1"}></span>
                                    </div>
                                </div>

                            </section>
                        </section>

                    </section>

                </main>
            </React.Fragment>
        )
    }
}
