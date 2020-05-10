import React, { Component } from 'react'
import '../../assets/style/my/setYm.css'
import headImg1 from '../../assets/images/headImg1.png'
export default class SetYm extends Component {
    render() {
        return (
            <div className="setYms">
                <div className="setTop"><i onClick={()=>{
                    this.props.history.push("/my")
                }}>&lt;</i> 设置</div>
                <div className="setCont">
                    <div className="setUser"><img src={headImg1} alt=""/><div>
                            <p><i>橙子</i></p>
                            <i>用户ID：6908733</i>
                        </div></div>
                    <div className="setSefety"><i>账号安全</i></div>
                    <div className="setAgre"><i>用户协议</i></div>
                    <div className="setRegard"><i>关于聚橙</i></div>
                </div>
                <div className="setQuit" onClick={()=>{
                    this.setState({
                        isLogin:false
                    })
                    localStorage.removeItem("user");
                    this.props.history.push("/my")
                }}>退出登录</div>
            </div>
        )
    }
}
