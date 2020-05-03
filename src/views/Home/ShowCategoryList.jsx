import React, {Component,Fragment} from 'react';
import style from "../../assets/style/sass/showsLibrary.module.scss"
import {connect} from "react-redux";

import showCategoryCreator from "../../store/actionCreator/Home/showCategory";
import ShowHeader from "../../compontents/ShowHeader";
class ShowCategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0
        };
    }

    render() {
        return (
            <div className={style.show_library}>
                <ShowHeader {...this.props}></ShowHeader>
                <div className={style.main}>
                    <div className={style.library_wrap}>
                        {
                            this.props.showList.map(v=>{
                                return (
                                    <div className={style.falls_cell} key={v.schedular_id}>
                                        {/*图片 */}
                                        <div className={style.falls_cell_image}>
                                            <img src={v.pic} alt=""/>
                                            <span className={style.falls_cell_image_label}>{v.city_name}</span>
                                        </div>
                                        {/*信息*/}
                                        <div className={style.falls_cell_info}>
                                            <div className={style.falls_cell_info_title}>
                                                <div className={style.falls_cell_info_title_sponsor}>
                                                   <img src={v.method_icon} alt=""/>
                                                </div>
                                                <h3 className={`${style.falls_cell__info__title__cell} ${v.method_icon?style.text_space:''}`}>
                                                    {v.name}
                                                </h3>
                                            </div>
                                            <p className={style.falls_cell_info_date}>
                                                <span>
                                                    {v.start_show_time} &nbsp;
                                                    {v.show_time_bottom}
                                                </span>
                                            </p>
                                            <p className={style.falls_cell_info_price}>
                                                <span className={style.falls_cell_info_price_price}>￥{v.min_price}</span>
                                                <span className={style.falls_cell_info_price_tip}>起</span>
                                            </p>
                                            <p className={style.falls_cell_info_support}>
                                                {
                                                    v.support_desc.map((v,i)=>{
                                                        return (
                                                            <Fragment key={i}>
                                                                <span className={style.falls_cell_info_support_label}>{v}</span>
                                                            </Fragment>
                                                        )
                                                    })

                                                    // v.support_desc.map()
                                                }

                                                {/*<span className={style.falls_cell_info_support_label}>可选坐</span>*/}
                                                {/*<span className={style.falls_cell_info_support_label}>限时8折起</span>*/}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount() {
        this.props.getShowCategoryList.call(this);
        this.props.getShowList.call(this);
        console.log(11,this.props);
    }
}
function mapStateToProps({showCategory}) {
    return {
        showCategoryList:showCategory.showCategoryList,
        showList : showCategory.showList,
        city_id:0,
        category:0,
        page:showCategory.page
    }
}
function mapDispatchToProps(dispatch) {
    return {
         getShowCategoryList(){
            dispatch(showCategoryCreator.getShowCategoryList());
        },

        async getShowList(city_id=0,category=0){
             const {data} = await this.$axios.get("/Show/Search/getShowList",{
                 params:{
                     city_id,
                     category,
                     page:this.page
                 }
             })
           dispatch({
               type:"CHANGE_SHOW_LIST",
               payload:data
           })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowCategoryList)