import React, { Component } from 'react'
import style from "../assets/css/theater.module.css";
import {
    Link
} from "react-router-dom"
export default class Theater extends Component {
    render() {
        return (
            <div className={style.bg}>
                <div className={style.head}>
                    剧院
                </div>
                <div className={style.main}>
                    <div className={style.content}>
                        <div>
                            <div>
                                <img src={require('../assets/image/2.jpg')} alt=""/>
                            </div>
                            <div>
                                <p>南山文体中心</p>
                                <p>92场在售演出</p>
                                <Link to={"./theater/theaterlist"}><i className="iconfont icon-gengduo"></i></Link>
                            </div>
                        </div>
                        <div>
                            <ul className={style.timeline}>
                                <li>
                                    <span>05月29日</span> 
                                    <b></b>
                                    <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                                </li>
                                <li>
                                    <span>05月30日</span>
                                    <b></b>
                                    <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                                </li>
                                <li>
                                    <span>06月04日</span>
                                    <b></b>
                                    <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div>
                            <div>
                                <img src={require('../assets/image/2.jpg')} alt=""/>
                            </div>
                            <div>
                                <p>南山文体中心</p>
                                <p>92场在售演出</p>
                                <Link to={"./theater/theaterlist"}><i className="iconfont icon-gengduo"></i></Link>
                            </div>
                        </div>
                        <div>
                            <ul className={style.timeline}>
                                <li>
                                    <span>05月29日</span> 
                                    <b></b>
                                    <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                                </li>
                                <li>
                                    <span>05月30日</span>
                                    <b></b>
                                    <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                                </li>
                                <li>
                                    <span>06月04日</span>
                                    <b></b>
                                    <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div>
                            <div>
                                <img src={require('../assets/image/2.jpg')} alt=""/>
                            </div>
                            <div>
                                <p>南山文体中心</p>
                                <p>92场在售演出</p>
                                <Link to={"./theater/theaterlist"}><i className="iconfont icon-gengduo"></i></Link>
                            </div>
                        </div>
                        <div>
                            <ul className={style.timeline}>
                                <li>
                                    <span>05月29日</span> 
                                    <b></b>
                                    <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                                </li>
                                <li>
                                    <span>05月30日</span>
                                    <b></b>
                                    <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                                </li>
                                <li>
                                    <span>06月04日</span>
                                    <b></b>
                                    <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
