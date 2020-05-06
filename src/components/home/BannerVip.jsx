import React, {Component} from 'react';
import style from "../../views/home/home.module.css";
import {Carousel, WingBlank} from 'antd-mobile';

export default class BannerVip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={style.vipSwiper}>
                <WingBlank>
                    <Carousel autoplay={true} afterChange={index=>{
                        this.setState({selectedIndex:index})
                    }} infinite selectedIndex={this.state.selectedIndex}>
                        {
                            this.props.discountList.map((v, i) => (
                                <div key={i} className={style.vipSwiperContainer}>
                                    <div className={style.vipSwiperPic}>
                                        <img src={v.pic}/>
                                    </div>
                                    {/*右侧*/}
                                    <div className={style.vipSwiperRight}>
                                        <a href="#">
                                            <h3>{v.schedular_name}</h3>
                                        </a>
                                        <p>
                                            <span>{v.min_discount}</span>
                                            <span>折起</span>
                                        </p>
                                        <a href="#">
                                            <span>立即抢购</span>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }

                    </Carousel>
                </WingBlank>
                {/* 分页*/}
                <div className={style.vipSwiperPagination}>
                    {
                        this.props.discountList.map((item, i) => (
                            <span key={i} className={i === this.state.selectedIndex ? style.vipActive : ""}></span>
                        ))
                    }
                </div>
            </div>
        )
    }
}