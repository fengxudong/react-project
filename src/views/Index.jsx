import React, { Component } from 'react';
import {
    NavLink,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import '../assets/style/index.css'
import Home from "./Home"
import My from "./My"
import Theater from "./Theater"
import Ticket from "./Ticket"
import shouye1 from '../assets/images/shouye.png'
import shouye2 from '../assets/images/shouye2.png'
import juyuan1 from '../assets/images/juyuan1.png'
import juyuan2 from '../assets/images/juyuan2.png'
import piaojia1 from '../assets/images/piaojia1.png'
import piaojia2 from '../assets/images/piaojia2.png'
import wode2 from '../assets/images/wode2.png'
import wode1 from '../assets/images/wode1.png'
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sy:false,
            jy:false,
            pj:false,
            wd:false,
        };
       
    }

    render() {
        // console.log(this.state)
        return (
           
            <div className="index">
                
                    <nav>
                        {this.state.sy === true?<p><img src={shouye2} style={{width:"0.43rem"}} alt=""/></p>:<p className="sy" onClick={this.switchImg.bind(this)}> <img src={shouye1} alt=""/> <NavLink exact to={"/"} activeClassName="active">首页</NavLink></p>}
                        <p className="jy" onClick={this.switchImg.bind(this)}> <img src={this.state.jy === true? juyuan2:juyuan1} alt=""/> <NavLink to={"/theater"} activeClassName="active">剧院</NavLink></p>
                        <p className="pj" onClick={this.switchImg.bind(this)}> <img src={this.state.pj === true? piaojia2:piaojia1} alt=""/> <NavLink to={"/ticket"} activeClassName="active">票夹</NavLink></p>
                        <p className="wd" onClick={this.switchImg.bind(this)}> <img src={this.state.wd === true? wode2:wode1} alt=""/> <NavLink to={"/my"} activeClassName="active">我的</NavLink></p>
                    </nav>
                    <Switch>

                        <Route path={"/"} exact component={Home}></Route>
                        <Route path={"/theater"} component={Theater}></Route>
                        <Route path={"/ticket"} component={Ticket}></Route>
                        <Route path={"/my"} component={My}></Route>
                        
                        <Redirect to={"/error"} from={"*"}></Redirect>
                    </Switch>
                   
            </div>
        )
        
    }
    switchImg(event){
        // console.log(event.currentTarget.className)
        if(event.currentTarget.className === "wd"){
            this.setState({
                sy:false,
                jy:false,
                pj:false,
                wd:true,
            })
         
            this.props.history.push("/my")
        }else if(event.currentTarget.className === "sy"){
            this.setState({
                sy:true,
                jy:false,
                pj:false,
                wd:false, 
            }) 
        
            this.props.history.push("/")
        }else if(event.currentTarget.className === "jy"){
            this.setState({
                sy:false,
                jy:true,
                pj:false,
                wd:false,
            })
            
            this.props.history.push("/theater")
        }else if(event.currentTarget.className === "pj"){
            this.setState({
                sy:false,
                jy:false,
                pj:true,
                wd:false,
            })
    
            this.props.history.push("/ticket")
        }
        
    }
    componentDidMount(){
        // console.log(this.props.location.pathname)
        if(this.props.location.pathname === "/"){
            this.setState({
                sy:true,
                jy:false,
                pj:false,
                wd:false, 
            }) 
        }else if(this.props.location.pathname === "/my"){
            this.setState({
                sy:false,
                jy:false,
                pj:false,
                wd:true, 
            }) 
        }else if(this.props.location.pathname === "/ticket"){
            this.setState({
                sy:false,
                jy:false,
                pj:true,
                wd:false, 
            }) 
        }else if(this.props.location.pathname === "/theater"){
            this.setState({
                sy:false,
                jy:true,
                pj:false,
                wd:false, 
            }) 
        }
    }
    
}