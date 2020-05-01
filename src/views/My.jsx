import React, { Component } from 'react'
import '../assets/style/my.css'
import headImg from '../assets/images/headImg.png'
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

                            
                       </div>
                   </div>
               </div>
               <div>
                   <div className="vip"></div>
               </div>
               <div className="card">3</div>
            </div>
        )
    }
}
