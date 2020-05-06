import React, { Component } from 'react'
import '../assets/style/my.css'
import headImg from '../assets/images/headImg.png'
import vipImg from '../assets/images/vipImg.png'
import headImg1 from '../assets/images/headImg1.png'
// import axios from "axios"


export default class My extends Component {
    constructor(props){
        super(props)
        this.state={
            isLogin:false
        }
      
        
    }
    render() {
        console.log(this)
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
                                //    console.log(123123)
                               }else{
                                    //    跳转路由
                                    this.props.history.push("/login")
                               }
                           }}>
                                 <img src={this.state.isLogin===false?headImg:headImg1} alt=""/><p className="p1">{this.state.isLogin===false?"登录/注册":"橙子"}</p>
                                 <p className="p2">{this.state.isLogin === false?"请点击登录 〉":"ID:6908377"}</p>
                           </div>
                           <div className="topMainBottom" style={{background:(this.state.isLogin===false?"#F5F5F5":"linear-gradient(-45deg, #f5dea9, #f8d583)"),color:(this.state.isLogin===false?"#B3B3B3":"#454341")}}>
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
               <button onClick={()=>{
                   this.setState({
                       isLogin:false
                   })
                   localStorage.removeItem("user");
               }}>退出登录</button>
            </div>
        )
    }
    componentWillMount(){
        
          // 获取登陆状态
          var user = JSON.parse(localStorage.getItem("user"));
          if(user){
              console.log(111111)
              this.setState({
                  isLogin:true
              })
          }
    }

}

