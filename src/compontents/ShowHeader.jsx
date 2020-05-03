import React, {Component} from 'react';
import style from "../assets/style/sass/showsLibrary.module.scss";
import {
    NavLink
} from "react-router-dom"
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
                {/*演出*/}
                <MyHeader  title={this.title}></MyHeader>
                {/*导航*/}
                <div className={style.show_type_wrap}>
                    <div className={style.show_type}>
                        <ul>
                            <li onClick={()=>{
                                this.props.getShowList.call(this,0,0);
                                this.setState({
                                    index:-1
                                })
                            }} className={this.state.index === -1?style.active:""}>全部</li>
                            {
                                this.props.showCategoryList.map((v,i)=>{
                                    return (
                                        <div key={v.id}>
                                            <li
                                                className={i===this.state.index?style.active:''}
                                                onClick={()=>{
                                                    this.props.getShowList.call(this,0,v.id);
                                                    this.changeActive(i);
                                                }}>{v.name}
                                            </li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={style.city_wrap} onClick={()=>{

                    }}>
                        <span className={style.city}>全国</span>
                        {/*<span>定位图标</span>*/}
                    </div>
                </div>
            </header>
        )
    }

    changeActive(num){
        this.setState({
            index:num
        })
    }
}