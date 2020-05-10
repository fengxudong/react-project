import React, { Component } from 'react'
import '../assets/style/my/login.css'
import loginLogo from '../assets/images/loginlogo.png'
import qq from '../assets/images/qq.png'
import wb from '../assets/images/wb.png'
import LightPrompt from '../component/LightPrompt'
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            islogto:false,
            userId:"",
            userPassword:"",
            Prompt:"敬请期待!"
        }
        
    }
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
        }else{
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
                    <input type="button"  onClick ={this.loginTo.bind(this)} name="dl" value="登录" />
                </div>
                <div className="logbot">
                    <p>忘记密码</p>
                    <p onClick={()=>{
                        this.props.history.push("/reg")
                    }}>注册 </p>
                </div>
                <LightPrompt state={this.state.Prompt}></LightPrompt>
                <div id="bastBottom">
                <div className="bastBottom">
                    <hr/><p>其他登录方式</p><hr/>
                    
                </div>
                <div className="logqqwb">
                   <p> <img src={qq} onClick={this.setTimeOne.bind(this)} name="qq" alt=""/></p>
                   <p> <img src={wb} onClick={this.setTimeOne.bind(this)} name="wb" alt=""/></p>
                </div>
                
                </div>
                
                
            </div>
            
        )
    }
    ret(){
        this.props.history.push("/my")
    }
    loginTo(event){
        if(event.target.name === "dl"){
            this.setState({
             Prompt:"登陆成功!"
            })
         }else{
             this.setState({
                 Prompt:"敬请期待!"
                })
         }
            if(this.state.islogto === true){
                const  user = {
                    userID:this.state.userId,
                    userPassword:this.state.userPassword
                }
                localStorage.setItem("user", JSON.stringify({user}));
                const tit = document.querySelector("#lightprompt")
                tit.style.display = "block"
               setTimeout(
                ()=>{
                    tit.style.display = "none"
                    this.props.history.push("/my")
                   },1500)
                
            }
            
    }
    setTimeOne(event){
        console.log(event.target.name)
        if(event.target.name === "dl"){
            this.setState({
             Prompt:"登陆成功!"
            })
         }else{
             this.setState({
                 Prompt:"敬请期待!"
                })
         }
       
        const tit = document.querySelector("#lightprompt")
        tit.style.display = "block"
       setTimeout(
        ()=>{
            tit.style.display = "none"
           },1500)
    }

    
    componentDidMount(){
        console.log(this.state)
        this.forceUpdate();
    }
    
}

