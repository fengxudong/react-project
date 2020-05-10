import React, {Component} from 'react'


import style from "../../assets/style/css/home.module.css";
import {connect} from "react-redux";
import homeCreator from "../../store/actionCreator/home";

import {bindActionCreators} from "redux";
import BannerAdv from "../../components/home/BannerAdv";
import BannerVip from "../../components/home/BannerVip";
import Recommend from "../../components/home/Recommend";

import {Link} from "react-router-dom"


//引入发布订阅
import pubsub from "pubsub-js";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: sessionStorage.city ? sessionStorage.city : "定位中...",
        };
    }

    render() {
        return (
            <div className={style.home}>
                {/*  头部*/}
                <div className={style.head}>
                    <div className={style.headAddress}>
                        <i className="iconfont icon-dizhi"></i>
                        <span className={style.headAddressName} onClick={()=>{
                            this.props.history.push("/selectCity")
                        }}>
                            {this.state.city}
                        </span>
                    </div>
                    <div className={style.headSearch}>
                        <i className="iconfont icon-sousuo"></i>
                        <span onClick={()=>{
                            this.props.history.push("/search")
                        }}>搜索热门演出</span>
                    </div>
                    <div className={style.headCal}>
                        <span>
                            <img src={require("../../assets/img/cal.png")} alt="" onClick={()=>{
                                this.props.history.push("/calendar")
                            }}/>
                        </span>
                    </div>
                </div>
                {/*主体*/}
                <main>
                    <section className={style.mainSection}>
                        {/*轮播*/}
                        <div className={style.banner}>
                            <div className={style.bannerContainer}>
                                <div className={style.bannerSwitch}>
                                    {/*组件*/}
                                    <BannerAdv slideList={this.props.slide_list}></BannerAdv>
                                </div>
                            </div>
                        </div>

                        {/* 演唱会*/}
                        <section className={style.adverSection}>
                            <div className={style.labelItem}>

                                {
                                    this.props.classify_list_top.map(v => (
                                        <div key={v.id}>
                                            <Link to={"/showCategoryList"}>
                                                <img src={v.pic}/>
                                                <span>{v.name}</span>
                                            </Link>
                                        </div>
                                    ))
                                }
                                {/*演唱会下*/}
                                {
                                    this.props.classify_list_bottom.map(v => (
                                        <div key={v.id}>
                                            <Link to={"/plus"}>
                                                <img src={v.pic}/>
                                                <span>{v.name}</span>
                                            </Link>
                                        </div>
                                    ))
                                }

                            </div>

                            {/* vip*/}
                            <section className={style.vipSection}>
                                {/*<a href="#">*/}
                                <div className={style.vipDiv}>
                                    <div>
                                        <img src={require("../../assets/img/vip.png")} alt=""/>
                                        vip+会员尊享权益
                                    </div>
                                    <div>
                                        99元/年
                                        <span className={"iconfont icon-xiayiye1"}></span>
                                    </div>
                                </div>
                                {/*</a>*/}
                                {/* vip轮播*/}
                                <BannerVip discountList={this.props.discountList}></BannerVip>

                            </section>
                            {/*广告*/}
                            <div className={style.advertion}>
                                <Link to={"/plus"}>
                                    <img
                                        src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png"
                                        alt=""/>
                                </Link>
                            </div>
                        </section>
                        {/*热门演出*/}
                        <div className={style.hotWrap}>
                            <div className={style.hotWrapTitle}>
                                <h3>热门演出</h3>
                                <div>

                                    <span>全部</span>

                                    <span onClick={()=>{this.props.history.push("/showCategoryList")}}>全部</span>

                                    <i className="iconfont icon-xiayiye1"></i>
                                </div>
                            </div>
                            {/* 主题*/}
                            <div className={style.hotWrapContent}>
                                <div className={style.hotSwiper}>
                                    {
                                        this.props.hots_show_list.map((v, i) => (
                                            <div className={style.hotSwiperItem} key={i}>
                                                <a href={v.schedular_url}>
                                                    <div className={style.hotPic}>
                                                        <img src={v.pic}/>
                                                    </div>
                                                    <h3>{v.show_name}</h3>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>


                        {/*巡回演出*/}
                        <div className={style.tourWarp}>
                            <div className={style.hotWrapTitle}>
                                <h3>巡回演出</h3>
                                <div>

                                    <span>全部</span>

                                    <span onClick={()=>{this.props.history.push("/touring")}}>全部</span>

                                    <i className="iconfont icon-xiayiye1"></i>
                                </div>
                            </div>
                            {/*主体*/}
                            <div className={style.tourContent}>
                                <div className={style.tourPic}>
                                    <img
                                        src="https://image.juooo.com/group1/M00/04/3E/rAoKNV59rlWAUODrAABlWN_fCvM347.jpg"
                                        alt=""/>
                                </div>
                                {/*巡回演出*/}
                                {
                                    this.props.tourList.map((v, i) => (
                                        <div className={style.tourInfo} key={i}>
                                            <div className={style.tourInfoTop}>
                                                <span>2020-05-01 - 10.03</span>
                                                <p>{v.name}</p>
                                                <p>
                                                    <span>￥</span>
                                                    <span>{v.min_price}</span>
                                                    <span>起</span>
                                                </p>
                                            </div>
                                            <div className={style.tourInfoBottom}>
                                                <div>
                                                    <span>{v.citys.length}</span>
                                                    <span>城巡演</span>
                                                </div>
                                                <div>
                                                    {
                                                        v.citys.map(item => (
                                                            <span key={item.sch_url}>{item.name} |</span>
                                                        ))
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        {/*舞台剧*/}
                        <div className={style.danceWrap}>
                            <div className={style.hotWrapTitle}>
                                <h3>舞台剧</h3>
                                <div>
                                    <i className="iconfont icon-xiayiye1"></i>
                                </div>
                            </div>
                            {/*主体*/}
                            <div className={style.danceContent}>
                                <a href="#">
                                    <div>
                                        <img
                                            src="https://image.juooo.com//group1/M00/04/21/rAoKNV4Jj32AC3hcAAMtvdtNV6E061.png"
                                            alt=""/>
                                    </div>
                                    <div>
                                        <p>
                                            <strong>
                                                2020.07.03
                                            </strong>
                                            <span>周五 20:00</span>
                                        </p>
                                        <h3>
                                            【演出延期】2020第七届城市戏剧节荒诞喜剧《劫出人生》-深圳站
                                        </h3>
                                        <p>
                                            深圳 |
                                            南山文体中心剧院小剧院
                                        </p>
                                    </div>
                                </a>

                            </div>
                        </div>

                        {/*舞台剧下*/}
                        <div className={style.danceBottom}>
                            <div className={style.hotSwiper}>
                                <div className={style.hotSwiperItem}>
                                    <a href="#">
                                        <div className={style.hotPic}>
                                            <img
                                                src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"/>
                                        </div>
                                        <h3>
                                            【演出延期】2020第七届城市戏剧节 乌镇戏剧节“最佳戏剧奖”“最佳个人表现奖”团队最新作品《涂红》-深圳站
                                        </h3>
                                        <p>
                                            <strong>￥99</strong>
                                            <span>起</span>
                                        </p>
                                    </a>
                                </div>
                                <div className={style.hotSwiperItem}>
                                    <a href="#">
                                        <div className={style.hotPic}>
                                            <img
                                                src="https://image.juooo.com//group1/M00/03/53/rAoKmV3ghGqAUpQ3AAB9Og9N3kY467.jpg"/>
                                        </div>
                                        <h3>
                                            【演出延期】2020第七届城市戏剧节 马修·伯恩经典全男版芭蕾舞剧《天鹅湖》高清影像-深圳站
                                        </h3>
                                        <p>
                                            <strong>￥99</strong>
                                            <span>起</span>
                                        </p>
                                    </a>
                                </div>
                                <div className={style.hotSwiperItem}>
                                    <a href="#">
                                        <div className={style.hotPic}>
                                            <img
                                                src="https://image.juooo.com//group1/M00/03/40/rAoKmV3LdBWAImHFAACB1n-G-Nk921.jpg"/>
                                        </div>
                                        <h3>
                                            【演出延期】3D科幻舞台剧《三体Ⅱ黑暗森林》-深圳站
                                        </h3>
                                        <p>
                                            <strong>￥180</strong>
                                            <span>起</span>
                                        </p>
                                    </a>
                                </div>
                                <div className={style.hotSwiperItem}>
                                    <a href="#">
                                        <div className={style.hotPic}>
                                            <img
                                                src="https://image.juooo.com//group1/M00/03/34/rAoKmV22uICAQ2WLAAFPaGvA5rE897.jpg"/>
                                        </div>
                                        <h3>
                                            四川人民艺术剧院-话剧《苏东坡》-石家庄
                                        </h3>
                                        <p>
                                            <strong>￥50</strong>
                                            <span>起</span>
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*为你推荐*/}
                        <div className={style.recommend}>
                            <h3>为你推荐</h3>
                            <div className={style.recommendContent}>
                                {/*主体*/}
                                <Recommend list_rg={this.props.list_rg} list_lf={this.props.list_lf}
                                           page={this.props.page}></Recommend>
                            </div>
                        </div>
                    </section>
                </main>
                {/* 底部 */}
                <div className={style.homeFooter}>没有更多了...</div>
                {/*广告*/}
                <div className={style.fixed}>
                    <a href="https://m.juooo.com/vip/index/1">
                        <img src="https://image.juooo.com/group1/M00/03/94/rAoKmV58jOmAAI84AAAp3i6IEAQ605.png" alt=""/>
                    </a>
                </div>

            </div>
        )
    }

    getAddress() {
        //定位
        const _this = this;
        // eslint-disable-next-line no-undef
        AMap.plugin("AMap.Geolocation", function () {
            // eslint-disable-next-line no-undef
            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: false,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                // eslint-disable-next-line no-undef
                buttonOffset: new AMap.Pixel(10, 20),
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                zoomToAccuracy: true,
                //  定位按钮的排放位置,  RB表示右下
                buttonPosition: "RB",
            });

            geolocation.getCurrentPosition();
            // eslint-disable-next-line no-undef
            AMap.event.addListener(geolocation, "complete", onComplete);
            // eslint-disable-next-line no-undef
            AMap.event.addListener(geolocation, "error", onError);

            function onComplete({addressComponent}) {
                console.log(addressComponent)
                // data是具体的定位信息
                _this.setState({
                    city: addressComponent.city,
                });
                sessionStorage.city = addressComponent.city;
            }

            function onError(data) {
                // 定位出错
                console.log(data);
            }
        });
    }

    async componentDidMount() {
        //获取数据
        this.props.getSlideList.call(this);
        this.props.getHotShowList.call(this);
        this.props.getDiscountList.call(this);
        this.props.getShowList.call(this, this.props.page);
        this.props.getTourList.call(this);
        // 订阅者 执行下一页测试
        pubsub.subscribe("page", (msgName, params) => {

            console.log(params, msgName);
            this.props.getShowList.apply(this, [params]);
        });
        // this.getAddress()

        if (localStorage.historyWord){
            localStorage.historyWord = localStorage.historyWord
        }else{
            localStorage.historyWord = JSON.stringify([])
        }

    }
}

function mapStateToProps(state) {
    //console.log(state.home, 111111);
    return {
        //轮播图
        slide_list: state.home.slide_list,
        //分类

        classify_list_top: state.home.classify_list_top,
        classify_list_bottom: state.home.classify_list_bottom,

        discountList: state.home.discountList,
        //热门
        hots_show_list: state.home.hots_show_list,
        // 瀑布流
        list_lf: state.home.list_lf,
        list_rg: state.home.list_rg,
        page: state.home.page,

        //巡回演出
        tourList: state.home.tour_list
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(homeCreator, dispatch);
    // return {
    //     //获取数据
    //     // getSlideList(){
    //     //     //console.log(this,222)
    //     //     dispatch(homeCreator.getSlideList.call(this));
    //     // }
    //     // async getSlideList(){
    //     //     //异步action
    //     //     dispatch(async ()=>{
    //     //         const {data}= await this.$axios.get("/home/index/getClassifyHome");
    //     //         console.log(data.slide_list);
    //     //         //更新
    //     //         dispatch(changeSlideList(data.slide_list))
    //     //     })
    //     // }
    //     // async getSlideList(){
    //     //     const {data}= await this.$axios.get("/home/index/getClassifyHome");
    //     //     console.log(data.slide_list);
    //     //     //更新
    //     //     dispatch(changeSlideList(data.slide_list))
    //     // }
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
