import React, { Component } from 'react'
import '../assets/style/login.css'
import loginLogo from '../assets/images/loginlogo.png'
import qq from '../assets/images/qq.png'
import wb from '../assets/images/wb.png'


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            islogto:false,
            userId:"",
            userPassword:""
        }
        
    }
    // 获取表单数据
    handleContentChange = (event)=>{
        const target = event.target
      const value = target.type === "checkbox"? target.checked:target.value
      const name = target.name
      this.setState({
        [name]:value
      })
      
     
        if(this.state.userId && this.state.userPassword){
            document.querySelector(".loginFrom>input").style.opacity ="1"
            this.setState({
                islogto:true,
            })
        }else if(this.state.userId ==="" || this.state.userPassword === ""){
            document.querySelector(".loginFrom>input").style.opacity ="0.5"
            this.setState({
                islogto:false,
            })
        }
  




      }
    render() {
        return (
            <div className="Login">
                <div className="loginTop">
                <button onClick={this.ret.bind(this)}>返回</button>
                </div>
                <div className="loginLogo">
                    <img src={loginLogo} alt=""/>
                </div>
                <div className="loginFrom">
                   <p><input type="text" name="userId" onChange={this.handleContentChange} placeholder="请输入手机号/邮箱"  /></p> 
                   <hr/>
                    <p><input type="text" name="userPassword" onChange={this.handleContentChange} placeholder="请输入密码" /></p>
                    <hr/>
                    <input type="button"  onClick ={this.loginTo.bind(this)} value="注册" />
                </div>
                <div className="logbot">
                    <p>忘记密码</p>
                    <p onClick={()=>{
                        this.props.history.push("/reg")
                    }}>密码登录</p>
                </div>

                <div id="bastBottom">
                <div className="bastBottom">
                    <hr/><p>其他登录方式</p><hr/>
                    
                </div>
                <div className="logqqwb">
                   <p> <img src={qq} onClick={this.LightPrompt} alt=""/></p>
                   <p> <img src={wb} onClick={this.LightPrompt} alt=""/></p>
                </div>
                </div>
                
                <div id="lightprompt"> 敬请期待！</div>
            </div>
            
        )
    }
    ret(){
        this.props.history.go(-1)
    }
    loginTo(){
            if(this.state.islogto === true){
                console.log(111)
            }
    }
    
    LightPrompt(){
        const tit = document.querySelector("#lightprompt")
        tit.style.display = "block"
       setTimeout(
        ()=>{
            tit.style.display = "none"
           },1500)
    }
    
    componentDidMount(){
        console.log(this.state)
    }
    
}

