import React, {Component} from 'react'
import style from "./home.module.css";

export default class Home extends Component {
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
                                    <img
                                        src="https://image.juooo.com/group1/M00/04/40/rAoKNV6W4PKACOg2AAEj0bMT7bw022.png"
                                        alt=""/>
                                </div>
                            </div>
                        </div>

                        {/* 演唱会*/}
                        <section className={style.adverSection}>
                            <div className={style.labelItem}>
                                <div>
                                    <a href="#">
                                        <img src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd7KAJp3dAAAHBeNpsuY695.png" alt=""/>
                                        <span>演唱会</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd76ANIqeAAAEry8ElbE406.png" alt=""/>
                                        <span>音乐剧</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="https://image.juooo.com/group1/M00/04/16/rAoKNV4Bd8mAOtozAAAGbMSgYxk302.png" alt=""/>
                                        <span>舞台剧</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4Bd9OAWX_4AAAGGUutSLg074.png" alt=""/>
                                        <span>儿童剧</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="https://image.juooo.com/group1/M00/04/16/rAoKNV4BeD6ACydtAAAFBhGYLbw928.png" alt=""/>
                                        <span>音乐会</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4BeEmAGJjkAAACgQbFPTY821.png" alt=""/>
                                        <span>欢聚橙卡</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="https://image.juooo.com/group1/M00/04/16/rAoKNV4BeFSASMNWAAADvXoqPxw946.png" alt=""/>
                                        <span>橙PLUS卡</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="https://image.juooo.com/group1/M00/04/16/rAoKNV4BeHiAGAi8AAAFggWA0y8333.png" alt=""/>
                                        <span>VIP+专区</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="https://image.juooo.com/group1/M00/03/6C/rAoKmV4BeICAJE6WAAAErgoy82o140.png" alt=""/>
                                        <span>积分兑换</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="https://image.juooo.com/group1/M00/04/16/rAoKNV4BeJGAcwDeAAAGEkAF0kA904.png" alt=""/>
                                        <span>拼团</span>
                                    </a>
                                </div>
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
                                <div className={style.vipSwiper}>
                                    <div className={style.vipSwiperContainer}>
                                        <div className={style.vipSwiperPic}>
                                            <img
                                                src="https://image.juooo.com/group1/M00/03/38/rAoKmV2_wuuAQ3PKAAC-dYecJHk485.jpg"
                                                alt=""/>
                                        </div>
                                        {/*右侧*/}
                                        <div className={style.vipSwiperRight}>
                                            <a href="#">
                                                <h3>【小橙堡】经典成长童话《三只小猪》-固安站</h3>
                                            </a>
                                            <p>
                                                <span>5</span>
                                                <span>折起</span>
                                            </p>
                                            <a href="#">
                                                <span>立即抢购</span>
                                            </a>
                                        </div>
                                    </div>
                                    {/* 分页*/}
                                    <div className={style.vipSwiperPagination}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
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
                                    <div className={style.hotSwiperItem}>
                                        <a href="#">
                                            <div className={style.hotPic}>
                                                <img
                                                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"/>
                                            </div>
                                            <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                        </a>
                                    </div>
                                    <div className={style.hotSwiperItem}>
                                        <a href="#">
                                            <div className={style.hotPic}>
                                                <img
                                                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"/>
                                            </div>
                                            <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                        </a>
                                    </div>
                                    <div className={style.hotSwiperItem}>
                                        <a href="#">
                                            <div className={style.hotPic}>
                                                <img
                                                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"/>
                                            </div>
                                            <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                        </a>
                                    </div>
                                    <div className={style.hotSwiperItem}>
                                        <a href="#">
                                            <div className={style.hotPic}>
                                                <img
                                                    src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg"/>
                                            </div>
                                            <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                        </a>
                                    </div>
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
                            </div>
                        </div>
                        {/*为你推荐*/}
                        <div className={style.recommend}>
                            <h3>为你推荐</h3>
                            <div className={style.recommendContent}>
                                {/*主体*/}
                                <div className={style.recommendMain}>
                                    {/*每一个*/}
                                    <div className={style.recommendItem}>
                                        <div>
                                            <span>深圳</span>
                                            <img
                                                src="https://image.juooo.com/group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg"
                                                alt=""/>
                                        </div>
                                        <div className={style.recommendBottom}>
                                            {/*主办*/}
                                            <div className={style.recommendTitle}>
                                                <div>
                                                    <img src="https://image.juooo.com/upload/i.png" alt=""/>
                                                </div>
                                                <h3>【演出延期】聚橙出品 |百老汇现象级原版音乐剧《来自远方》-深圳站</h3>
                                            </div>
                                            <p><span>2020.06.12 - 06.14  </span></p>
                                            <p>
                                                <span>￥280</span>
                                                <span> 起</span>
                                            </p>
                                            <p>
                                                <span>电子票</span>
                                                <span>可选座</span>
                                                <span>限时8折起</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.recommendItem}>
                                        <div>
                                            <span>深圳</span>
                                            <img
                                                src="https://image.juooo.com/group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg"
                                                alt=""/>
                                        </div>
                                        <div className={style.recommendBottom}>
                                            {/*主办*/}
                                            <div className={style.recommendTitle}>
                                                <div>
                                                    <img src="https://image.juooo.com/upload/i.png" alt=""/>
                                                </div>
                                                <h3>【演出延期】聚橙出品 |百老汇现象级原版音乐剧《来自远方》-深圳站</h3>
                                            </div>
                                            <p><span>2020.06.12 - 06.14  </span></p>
                                            <p>
                                                <span>￥280</span>
                                                <span> 起</span>
                                            </p>
                                            <p>
                                                <span>电子票</span>
                                                <span>可选座</span>
                                                <span>限时8折起</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </React.Fragment>
        )
    }
}
