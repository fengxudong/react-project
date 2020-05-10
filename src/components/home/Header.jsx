import React, {Component} from 'react';
import style from "../../assets/style/css/plus.module.css";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.header}>
                <i className="iconfont icon-fanhui" onClick={() => this.props.history.push("/")}></i>
                <div>{this.props.content}</div>
                <i className="iconfont icon-shenglvehao"></i>
            </div>
        )
    }
}