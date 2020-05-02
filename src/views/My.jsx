import React, { Component } from 'react'
import '../assets/style/my.css'
import headImg from '../assets/images/headImg.png'
import vipImg from '../assets/images/vipImg.png'
import axios from "axios"


export default class My extends Component {
    render() {
        return (
            <div className="My">
               <div>
                   <div className="top">
                       <div className="sz">
                            设置
                       </div>
                       <div className="topMain">
                           <div className="topMainCen">
                                 <img src={headImg} alt=""/><p className="p1">登录/注册</p>
                                 <p className="p2">请点击登录 〉</p>
                           </div>
                           <div className="topMainBottom">
                                <p>普通会员</p>
                           </div>
                           <div className="topMainCol">
                               <p>
                                   <i>0</i>
                                   <b>账户余额</b>
                               </p>
                               <div></div>
                               <p> <i>0</i>
                                   <b>账户余额</b>
                                   </p>
                               <div></div>
                               <p> <i>0</i>
                                   <b>账户余额</b>
                                   </p>
                               <div></div>
                               <p> <i>0</i>
                                   <b>账户余额</b>
                                   </p>
                           </div>

                            
                       </div>
                   </div>
               </div>
               <div>
                   <div className="vip">
                       <img src={vipImg} alt=""/>
                   </div>
               </div>
               <div className="card">
                   <div>
                       <dl>
                           <dt className="iconfont icon-kabao"></dt>
                           <dd>我的订单</dd>
                       </dl>
                       <dl>
                           <dt>1111</dt>
                           <dd>我的票夹</dd>
                       </dl>
                       <dl>
                           <dt>3333</dt>
                           <dd>我的卡包</dd>
                       </dl>
                       <dl>
                           <dt>4444</dt>
                           <dd>啥也没有</dd>
                       </dl>
                   </div>
                   <div>
                   <dl>
                           <dt>111</dt>
                           <dd>我的订单</dd>
                       </dl>
                       <dl>
                           <dt>1111</dt>
                           <dd>我的票夹</dd>
                       </dl>
                       <dl>
                           <dt>3333</dt>
                           <dd>我的卡包</dd>
                       </dl>
                       <dl>
                           <dt>4444</dt>
                           <dd>啥也没有</dd>
                       </dl>
                   </div>
               </div>
            </div>
        )
    }
    async componentDidMount(){
        console.log(111111)
        const {data} = await axios.get("https://api.juooo.com/user/account/getMenuItem?version=6.1.1&referer=2")
                                        // user/account/getMenuItem?version=6.1.1&referer=2
        console.log(data)
    }
}

