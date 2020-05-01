import React, {Component} from 'react'
import style from "./home.module.css";
export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                {/*  头部*/}
                <div className={style.head}>
                    <div className={style.headAddress}>
                        <span></span>
                        <span className={style.headAddressName}>
                            西安
                        </span>
                    </div>
                    <div>1</div>
                    <div>
                        <img src={require("../../assets/img/cal.png")} alt=""/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
