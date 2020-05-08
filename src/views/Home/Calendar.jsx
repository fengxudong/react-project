import React, {Component,Fragment} from 'react';
import style from "../../assets/style/sass/showsLibrary.module.scss";
import showCategoryCreator from "../../store/actionCreator/Home/showCategory";
import showListCreator from "../../store/actionCreator/Home/showList";
import {connect} from "react-redux"
import MyHeader from "../../compontents/MyHeader";
import ShowCategroryHeader from "../../compontents/ShowCategroryHeader";
import CityDialog from "../../compontents/CityDialog";

const currentDate = {
    color:' #ff6743',
    background:'#FEDAC8',
    width: '0.77333rem',
    height: '0.77333rem',
    lineHeight:'0.8rem',
    borderRadius:'50%'
}

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNone:true,
            city:'',
            year:new Date().getFullYear(),
            month:new Date().getMonth()+1,
            day:new Date().getDate(),
            index:''
        };
        this.title = "演出日历";
        this.days = [26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4,5,6]
    }

    render() {
        return (
            <div className={style.show_library}>
                <header className={style.head_nav}>
                    <MyHeader {...this.props} title={this.title}></MyHeader>
                    {/*<ShowHeader {...this.props}></ShowHeader>*/}
                    <ShowCategroryHeader {...this.props} city={this.state.city}  typeFiltrateDisPlay={this.typeFiltrateDisPlay.bind(this)}></ShowCategroryHeader>

                    <div className={style.calendar_wrap}>
                        <div className={style.top_change}>
                            <li>
                                <div className={style.jiantou1} onClick={()=>{
                                    this.setState({
                                        month:--this.state.month
                                    })
                                }}></div>
                            </li>
                            <li className={style.content_li}>{this.state.year}年{this.state.month}月</li>
                            <li>
                                <div className={style.jiantou2} onClick={()=>{
                                    this.setState({
                                        month:++this.state.month
                                    })
                                }}></div>
                            </li>
                        </div>
                        <div className={style.content}>
                            <div className={style.content_item}>
                                <div className={style.top_tag} style={{color:'#ff6743'}}>日</div>
                            </div>
                            <div className={style.content_item}>
                                <div className={style.top_tag}>一</div>
                            </div>
                            <div className={style.content_item}>
                                <div className={style.top_tag}>二</div>
                            </div>
                            <div className={style.content_item}>
                                <div className={style.top_tag}>三</div>
                            </div>
                            <div className={style.content_item}>
                                <div className={style.top_tag}>四</div>
                            </div>
                            <div className={style.content_item}>
                                <div className={style.top_tag}>五</div>
                            </div>
                            <div className={style.content_item}>
                                <div className={style.top_tag} style={{color:'#ff6743'}}>六</div>
                            </div>
                        </div>
                        <div className={style.content} style={{background:"#fff",paddingTop:'0.42667rem',paddingBottom:'0.42667rem'}}>

                            {
                                this.days.map((v,i)=>{
                                    return (
                                        <div key={i} className={style.content_item} onClick={()=>{
                                            this.setState({
                                                index : i
                                            })
                                        }}>
                                            <div style={this.state.index === i?currentDate:{color:''}}  className={i<this.state.index?style.pre_date:style.item_date}>{v}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </header>
                <div className={style.main}  style={{background:'#f5f5f5'}}>
                    <div className={this.state.isNone?style.type_filtrate:style.type_filtrate1}>
                        <CityDialog {...this.props} changeCity={this.changeCity.bind(this)} typeFiltrateDisPlay={this.typeFiltrateDisPlay.bind(this)}></CityDialog>
                    </div>
                    <div className={style.show_list}>没有更多了</div>
                </div>
            </div>
        )
    }

    typeFiltrateDisPlay(bol){
        this.setState({
            isNone:bol
        })
    }

    changeCity(city){
        this.setState({
            city
        })
    }

    changeDay(){
        this.days.find((v,i)=>{
            if (v===this.state.day){
                this.setState({
                    index:i
                })
            }
        })
    }

    async componentDidMount() {
        this.props.getShowCategoryList();
        // this.props.getCalendar();
        const {data} = await this.$axios.get("/Search/getCalendar?year=2020&month=5&category=0&version=6.1.1&referer=2")
        // console.log(11,data);
        this.changeDay();
        // console.log(this.state.day)
    }
}

function mapStateToProps({showCategory,showList,calendar}) {
    return {
        showCategoryList:showCategory.showCategoryList,
        showList : showList.showList,
        calendar:calendar.calendar
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getShowCategoryList(){
            dispatch(showCategoryCreator.getShowCategoryList());
        },
        getShowList(data={}){
            dispatch(showListCreator.getShowList(data));
        },
        getCalendar(){
            // const getCalendar = async dispath=>{
            //             //     const {data} = await this.$axios.get("/Search/getCalendar",{
            //             //         params:{
            //             //             year:2020,
            //             //             month:5,
            //             //             category:0
            //             //         }
            //             //     })
            //             //     dispath({
            //             //         type:"CHANGE_CALENDAR",
            //             //         payload:data.calendar
            //             //     })
            //             // }
            // dispatch(getCalendar)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Calendar)