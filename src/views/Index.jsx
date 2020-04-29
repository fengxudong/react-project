import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import MyRouter from "../components/common/MyRouter";
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
                    <NavLink exact className={"App-link"} activeClassName={"App-active"} to={"/theater"}>剧院</NavLink>|
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/ticket"}>票夹</NavLink>|
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/my"}>我的</NavLink>
                </nav>
                <MyRouter router={this.props.childrends}></MyRouter>

            </div>
        )
    }
    componentDidMount() {
        // console.log(this.props.childrends);
    }
}