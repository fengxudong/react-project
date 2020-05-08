
import React, {Component} from 'react';
import {
    NavLink,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
// import Home from "./home/Home"
import Home from "./Home/Home"
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
            <React.Fragment>
                <Switch>
                    <Route path={"/"} exact component={Home}></Route>
                    <Route path={"/theater"} component={Theater}></Route>
                    <Route path={"/ticket"} component={Ticket}></Route>
                    <Route path={"/my"} component={My}></Route>
                    <Redirect to={"/error"} from={"*"}></Redirect>
                </Switch>
                <nav>
                    <NavLink exact className={"App-link"} activeClassName={"App-active"} to={"/"}>
                        <i className="iconfont icon-shouye"></i>
                        <span>首页</span>
                    </NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/theater"}>
                        <i className="iconfont icon-icon-test"></i>
                        <span>剧院</span>
                    </NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/ticket"}>
                        <i className="iconfont icon-gerenpiaojia"></i>
                        <span>票夹</span>
                    </NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/my"}>
                        <i className="iconfont icon-wode"></i>
                        <span>我的</span>
                    </NavLink>
                </nav>
            </React.Fragment>
        )
    }
}