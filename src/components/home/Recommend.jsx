import React, {Component} from 'react';

import style from "../../assets/style/css/home.module.css";

export default class Recommend extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log(this.props);
        return (
            <div className={style.recommendMain}>
                {/*左侧*/}
                <div>
                    {
                        this.props.list_lf.map((v, i) => (
                            <div key={i} className={style.recommendItem}>
                                <div>
                                    <span>{v.city_name}</span>
                                    <img src={v.pic}/>
                                </div>
                                <div className={style.recommendBottom}>
                                    {/*主办*/}
                                    <div className={style.recommendTitle}>
                                        <div>
                                            <img src={v.method_icon} alt=""/>
                                        </div>
                                        <h3>{v.name}</h3>
                                    </div>
                                    {/*<p><span>{v.start_show_time} - {v.end_show_time}  </span></p>*/}
                                    <p><span>{v.show_time_top}  </span></p>
                                    <p>
                                        <span>￥{v.min_price}</span>
                                        <span> 起</span>
                                    </p>
                                    <p>
                                        {
                                            v.support_desc.map((item, i) => (
                                                <React.Fragment key={i}>
                                                    <span>{item}</span>
                                                </React.Fragment>
                                            ))
                                        }
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/*右侧*/}
                <div>
                    {
                        this.props.list_rg.map((v, i) => (
                            <div key={i} className={style.recommendItem}>
                                <div>
                                    <span>{v.city_name}</span>
                                    <img src={v.pic}/>
                                </div>
                                <div className={style.recommendBottom}>
                                    {/*主办*/}
                                    <div className={style.recommendTitle}>
                                        <div>
                                            <img src={v.method_icon} alt=""/>
                                        </div>
                                        <h3>{v.name}</h3>
                                    </div>
                                    {/*<p><span>{v.start_show_time} - {v.end_show_time}  </span></p>*/}
                                    <p><span>{v.show_time_top}  </span></p>
                                    <p>
                                        <span>￥{v.min_price}</span>
                                        <span> 起</span>
                                    </p>
                                    <p>
                                        {
                                            v.support_desc.map((item, i) => (
                                                <React.Fragment key={i}>
                                                    <span>{item}</span>
                                                </React.Fragment>
                                            ))
                                        }
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}
