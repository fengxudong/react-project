import React, {Component} from 'react';
import style from "../assets/style/sass/showsLibrary.module.scss";
import showCategoryCreator from "../store/actionCreator/Home/showCategory";
import showListCreator from "../store/actionCreator/Home/showList";
import locationCreator from "../store/actionCreator/Home/location";
import {connect} from "react-redux"
class ShowCategroryHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:-1,
            city_id:''
        };
    }

    render() {
        return (
            <div className={style.show_type_wrap}>
                <div className={style.show_type}>
                    <ul>
                        <li onClick={()=>{
                            this.props.getShowList.call(this,{
                                city_id:this.props.city_id,
                                category:this.props.category
                            });
                            this.props.changeCategory.call(this,{
                                category:0
                            })
                            this.setState({
                                index:-1
                            })
                        }} className={this.state.index === -1?style.active:""}>全部</li>
                        {
                            this.props.showCategoryList.map((v,i)=>{
                                return (
                                    <div key={v.id}>
                                        <li
                                            className={i===this.state.index?style.active:''}
                                            onClick={()=>{
                                                localStorage.category = v.id
                                                this.props.getShowList.call(this,{
                                                    city_id:Number(localStorage.city_id),
                                                    category:Number(localStorage.category)
                                                });
                                                this.changeActive(i);
                                            }}>{v.name}
                                        </li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={style.city_wrap}  onClick={()=>{
                    this.props.typeFiltrateDisPlay(false)
                }}>
                    <span className={style.city}>{localStorage.city}</span>
                    {/*<span>定位图标</span>*/}
                </div>
            </div>
        )
    }

    changeActive(num){
        this.setState({
            index:num
        })
    }

    componentDidMount() {
        // localStorage.category = 0;
    }
}

function mapStateToProps({location}) {
    return {
        category:0,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // getCity(){
        //     dispatch(locationCreator.getCity())
        // },
        changeCategory(payload){
            dispatch({
                type:"CHANGE_CATEGORY",
                payload
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowCategroryHeader)
