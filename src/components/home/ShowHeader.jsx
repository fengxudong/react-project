import React, {Component} from 'react';
import style from "../../assets/style/sass/showsLibrary.module.scss";
import MyHeader from "./MyHeader";
export default class ShowHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:-1
        };
        this.title="演出"
    }

    render() {
        return (
            <header className={style.head_nav}>

            </header>
        )
    }

    changeActive(num){
        this.setState({
            index:num
        })
    }
}