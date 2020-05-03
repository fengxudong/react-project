import React, { Component } from 'react'
import '../assets/style/my.css'
import headImg from '../assets/images/headImg.png'
import vipImg from '../assets/images/vipImg.png'
import axios from "axios"


export default class My extends Component {
    constructor(props){
        super(props)
        this.state={
            isLogin:false
        }
    }
    render() {
        return (
            <div className="My">
               <div>
                   <div className="top">
                       <div className="sz">
                            设置
                       </div>
                       <div className="topMain">
                           <div className="topMainCen" onClick={()=>{
                               if(this.state.isLogin===true){
                                   console.log(123123)
                               }else{
                                    //    跳转路由
                                    this.props.history.push("/login")
                               }
                           }}>
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
                                   <b>积分</b>
                                   </p>
                               <div></div>
                               <p> <i>0</i>
                                   <b>优惠券</b>
                                   </p>
                               <div></div>
                               <p> <i style={{fontSize:"0.13rem"}}>立即开通</i>
                                   <b>橙PLUE卡</b>
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
                           <dt className="iconfont icon-icon-"></dt>
                           <dd>我的订单</dd>
                       </dl>
                       <dl>
                           <dt className="iconfont icon-piaojia-moren"></dt>
                           <dd>我的票夹</dd>
                       </dl>
                       <dl>
                           <dt className="iconfont icon-kabao"></dt>
                           <dd>我的卡包</dd>
                       </dl>
                       <dl>
                           <dt ></dt>
                           <dd></dd>
                       </dl>
                   </div>
                   <div>
                   <dl>
                           <dt className="iconfont icon-tongxunlu"></dt>
                           <dd>实名购票人</dd>
                       </dl>
                       <dl>
                           <dt className="iconfont icon-shouhuodizhi"></dt>
                           <dd>收货地址</dd>
                       </dl>
                       <dl>
                           <dt className="iconfont icon-feedback"></dt>
                           <dd>意见反馈</dd>
                       </dl>
                       <dl>
                           <dt className="iconfont icon-kefu"></dt>
                           <dd>客服帮助</dd>
                       </dl>
                   </div>
               </div>
            </div>
        )
    }
    async componentDidMount(){
        const {data} = await axios.get("https://api.juooo.com/user/account/getMenuItem?version=6.1.1&referer=2")
        console.log(data)
    }
    // toLogin(){
    //      //    跳转路由
    //      this.props.history.push("/login")
    // }

}

