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
import juyuan1 from '../assets/images/juyuan1.png'
import juyuan2 from '../assets/images/juyuan2.png'
import piaojia1 from '../assets/images/piaojia1.png'
import piaojia2 from '../assets/images/piaojia2.png'
import wode2 from '../assets/images/wode2.png'
import wode1 from '../assets/images/wode1.png'
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this)
    }

    render() {
        return (
           
            <div className="index">
                
                    <nav>
                        <p> <img src={shouye1} alt=""/> <NavLink exact to={"/"} activeClassName="active">首页</NavLink></p>
                        <p> <img src={juyuan1} alt=""/> <NavLink to={"/theater"} activeClassName="active">剧院</NavLink></p>
                        <p> <img src={piaojia1} alt=""/> <NavLink to={"/ticket"} activeClassName="active">票夹</NavLink></p>
                        <p> <img src={wode1} alt=""/> <NavLink to={"/my"} activeClassName="active">我的</NavLink></p>
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
    
}