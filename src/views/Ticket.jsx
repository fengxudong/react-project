import React, { Component } from 'react'
import '../assets/style/my/ticket.css'
import piaojia from '../assets/images/piaojia.png'
export default class Ticket extends Component {
    constructor(props){
        super(props)
        this.state={
            isLogin:false
        }
    }
    render() {
        return (
            <div className="piaojiaym">
                <section><p><i>票夹</i></p><span>…</span></section>
                <img src={piaojia} alt=""/>
                <p>暂无电子票</p>
                <button style={{display:this.state.isLogin===true?"none":"block"}} onClick={()=>{
                    this.props.history.push("/login")
                }}>登陆</button>
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
