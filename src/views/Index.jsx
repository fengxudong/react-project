import React, { Component } from 'react';
import {
    NavLink,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Home from "./Home"
import My from "./My"
import Theater from "./Theater"
import Ticket from "./Ticket"

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                
                    <nav>
                        <NavLink exact className={"App-link"} activeClassName={"App-active"} to={"/"}>首页</NavLink>|
                        <NavLink className={"App-link"} activeClassName={"App-active"} to={"/theater"}>剧院</NavLink>|
                        <NavLink className={"App-link"} activeClassName={"App-active"} to={"/ticket"}>票夹</NavLink>|
                        <NavLink className={"App-link"} activeClassName={"App-active"} to={"/my"}>我的</NavLink>
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