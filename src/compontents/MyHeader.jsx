import React, {Component} from 'react';
import style from "../assets/style/sass/showsLibrary.module.scss";

export default class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={`${style.library_title} ${style.title}`}>
                <span className={style.title_text}>{this.props.title}</span>
                <i className={style.title_back} onClick={()=>{
                    this.props.history.push("/");
                }}>返回</i>
                {/*<span className="iconfont icon-back"></span>*/}
                <div className={style.title_nav_wrapper}>
                    <div className={style.title_nav}>
                        <i className={style.title_nav_ellipsis}>更多</i>
                        {/*<span className="iconfont icon-gengduo"></span>*/}
                    </div>
                </div>
            </div>
        )
    }
}