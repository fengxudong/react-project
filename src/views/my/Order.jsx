import React, { Component } from 'react'
import '../../assets/style/my/ticket.css'
import dingdan from "../../assets/images/ddImg.png"
export default class Order extends Component {
 
    render() {
        return (
            <div className="piaojiaym">
                <section><b onClick={()=>{
                    this.props.history.push("/my")
                }}> 	&lt; </b><p><i>我的订单</i></p><span>…</span></section>
                <img src={dingdan} alt=""/>
                <p>暂无订单</p>
               
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
