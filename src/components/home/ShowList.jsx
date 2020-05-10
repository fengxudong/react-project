import React, {Component, Fragment} from 'react';
// import style from "../assets/style/sass/showsLibrary.module.scss";
import style from "../../assets/style/sass/showList.module.scss";

export default class ShowList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
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
                                        }
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}