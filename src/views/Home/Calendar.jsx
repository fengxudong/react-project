import React, {Component} from 'react';
import style from "../../assets/style/sass/showsLibrary.module.scss";
import showCategoryCreator from "../../store/actionCreator/Home/showCategory";
import showListCreator from "../../store/actionCreator/Home/showList";
import {connect} from "react-redux"
import MyHeader from "../../compontents/MyHeader";
import ShowCategroryHeader from "../../compontents/ShowCategroryHeader";
class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.title = "演出日历"
    }

    render() {
        return (
            <div className={style.show_library}>
                <header className={style.head_nav}>
                    <MyHeader {...this.props} title={this.title}></MyHeader>
                    {/*<ShowHeader {...this.props}></ShowHeader>*/}
                    <ShowCategroryHeader {...this.props}></ShowCategroryHeader>

                </header>
                <div className={style.main}  style={{background:'#f5f5f5'}}>
                   <div className={style.calendar_wrap}>
                        <div className={style.top_change}>
                            <li>
                                <div className={style.jiantou1}></div>
                            </li>
                            <li className={style.content_li}>2020年5月</li>
                            <li>
                                <div className={style.jiantou2}></div>
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
                       <div className={`${style.content} ${style.days}`} style={{background:"#fff"}}>
                           <div className={style.content_item}>
                               <div className={style.top_tag}>日</div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        this.props.getShowCategoryList();
        // this.props.getCalendar();
        const data = await this.$axios.get("/Search/getCalendar",{
            params:{
                year:2020,
                month:5,
                category:0
            }
        })
        console.log(11,data);
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

