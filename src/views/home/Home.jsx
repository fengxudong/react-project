import React, {Component} from 'react'
import style from "./home.module.css";
import {connect} from "react-redux";
import homeCreator, {changeSlideList} from "../../store/actionCreator/home";
import {bindActionCreators} from "redux";
import BannerAdv from "../../components/home/BannerAdv";
import BannerVip from "../../components/home/BannerVip";
import Recommend from "../../components/home/Recommend";
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {/*  头部*/}
                <div className={style.head}>
                    <div className={style.headAddress}>
                        <i className="iconfont icon-dizhi"></i>
                        <span className={style.headAddressName}>
                            西安
                        </span>
                    </div>
                    <div className={style.headSearch}>
                        <i className="iconfont icon-sousuo"></i>
                        <span>搜索热门演出</span>
                    </div>
                    <div className={style.headCal}>
                        <span>
                            <img src={require("../../assets/img/cal.png")} alt=""/>
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
                                    this.props.classify_list.map(v => (
                                        <div key={v.id}>
                                            <a href={v.url} target={"_blank"}>
                                                <img src={v.pic}/>
                                                <span>{v.name}</span>
                                            </a>
                                        </div>
                                    ))
                                }

                            </div>

                            {/* vip*/}
                            <section className={style.vipSection}>
                                <a href="#">
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
                                </a>
                                {/* vip轮播*/}
                                <BannerVip discountList={this.props.discountList}></BannerVip>

                            </section>
                            {/*广告*/}
                            <div className={style.advertion}>
                                <a href="#">
                                    <img
                                        src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png"
                                        alt=""/>
                                </a>
                            </div>
                        </section>
                        {/*热门演出*/}
                        <div className={style.hotWrap}>
                            <div className={style.hotWrapTitle}>
                                <h3>热门演出</h3>
                                <div>
                                    <span>全部</span>
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
                                <div className={style.tourInfo}>
                                    <div className={style.tourInfoTop}>
                                        <span>2020.08.13 - 10.03</span>
                                        <p>聚橙制作 | 法语音乐剧《摇滚红与黑》</p>
                                        <p>
                                            <span>￥</span>
                                            <span>80</span>
                                            <span>起</span>
                                        </p>
                                    </div>
                                    <div className={style.tourInfoBottom}>
                                        <div>
                                            <span>6</span>
                                            <span>城巡演</span>
                                        </div>
                                        <div>
                                            <span>上海</span>|
                                            <span>广州</span>|
                                            <span>深圳</span>|
                                            <span>成都</span>
                                        </div>
                                    </div>
                                </div>
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
                                <Recommend showList={this.props.showList}></Recommend>
                            </div>
                        </div>
                    </section>
                </main>
                <div className={style.fixed}>
                    <a href="https://m.juooo.com/vip/index/1">
                        <img src="https://image.juooo.com/group1/M00/03/94/rAoKmV58jOmAAI84AAAp3i6IEAQ605.png" alt=""/>
                    </a>
                </div>
            </React.Fragment>
        )
    }

    async componentDidMount() {
        this.props.getSlideList.call(this);
        this.props.getHotShowList.call(this);
        this.props.getDiscountList.call(this);
        this.props.getShowList.call(this);
    }
}

function mapStateToProps(state) {
    //console.log(state.home, 111111);
    return {
        //轮播图
        slide_list: state.home.slide_list,
        classify_list: state.home.classify_list,
        discountList: state.home.discountList,
        hots_show_list: state.home.hots_show_list,
        showList:state.home.showList
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
