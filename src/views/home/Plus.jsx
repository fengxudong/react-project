import React, {Component} from 'react';
import style from "./plus.module.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import homeCreator from "../../store/actionCreator/Home"

class Plus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:false//默认不显示
        };
    }

    render() {
        const myDiv = (
            <div className={style.useRule}>
                {this.props.plusDetail}
            </div>
        )
        return (
            <div>
                <div className={style.plus}>
                    {/*头部*/}
                    <div className={style.header}>
                        <i className="iconfont icon-fanhui" onClick={()=>this.props.history.push("/")}></i>
                        <div>橙PLUS卡</div>
                        <i className="iconfont icon-shenglvehao"></i>
                    </div>
                    {/*图片*/}
                    <div className={style.advPic}>
                        <div>
                            <p>橙PLUS卡</p>
                            <div>
                                <span>开卡999 </span>
                                <span>送 </span>
                                <span>200 </span>
                                <span>储值卡</span>
                            </div>

                            {/*赠送会员*/}
                            <div>
                                <span>赠送VIP+会员 </span>
                                <span>年 </span>
                                <span>尊享10大权益 </span>
                            </div>
                            <a href="javaScript:;" onClick={()=>{
                                this.setState({isShow:!this.state.isShow})
                            }}>使用规则</a>

                        </div>
                    </div>
                    <div className={style.kaika}>
                        <button>立即开卡</button>
                    </div>
                </div>
                {/*会员尊享*/}
                <div className={style.plusContainer}>
                    <div className={style.plusInfo}>
                        <p>VIP+尊享10大权益</p>
                        <div className={style.plusContent}>
                            <ul>
                                {
                                    this.props.equity_list.map(v=>(
                                        <li key={v.benefits_name}>
                                            <img
                                                src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png"
                                                alt=""/>
                                            <p>{v.benefits_name}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                            <button className={style.plusVipButton}>立即开通 ￥ <span>99</span> /年</button>
                        </div>
                    </div>
                </div>
                {/*前*/}
                <div className={style.plusMoney}>
                    <img src="https://m.juooo.com/static/img/save.e6e7f69.png" alt=""/>
                </div>
                {/*使用规则*/}
                {
                    this.state.isShow?myDiv:null
                }
                {/*底部*/}
                <div className={style.footer}>
                    <div>
                        <span>开卡限时送</span>
                        <span>￥200</span>
                    </div>
                    <button>立即开卡</button>
                </div>
            </div>
        )
    }

    componentDidMount() {
       this.props.getEquityList.call(this);
    }
}

function mapStateToProps(state) {
    return {
        equity_list: state.home.equity_list,
        plusDetail:state.home.plusDetail
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(homeCreator, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Plus)