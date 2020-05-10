import React, {Component} from 'react';
import Header from "../../components/home/Header";
import style from "../../assets/style/css/touring.module.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import homeCreator from "../../store/actionCreator/home";
/*巡回演出*/
class Touring extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <Header {...this.props} content={"巡回演出"}></Header>

                    {
                        this.props.tour_list.map((v,i)=>(
                            <div key={i} className={style.tourList}>
                                <div className={style.tourContent}>
                                    <div className={style.tourPic}>
                                        <img src={v.mobile_col_img}/>
                                    </div>
                                    <div className={style.tourRight}>
                                        <p>{v.name}</p>
                                        <div className={style.tourSwiper}>
                                            {
                                               v.citys.map((item, index)=>(
                                                   <div  key={index} className={style.tourCityListItem}>
                                                       <div>
                                                           {item.name}
                                                           {/*线*/}
                                                           <p></p>
                                                       </div>
                                                       <p></p>
                                                       {/*time*/}
                                                       <p>09/03</p>
                                                   </div>
                                               ))
                                            }
                                        </div>
                                    </div>
                                </div>
                        </div>
                        ))
                    }

            </React.Fragment>
        )
    }
    componentDidMount() {
        this.props.getTourList.call(this);
    }
}

function mapStateToProps(state) {
    return {
        //巡回演出
        tour_list: state.home.tour_list
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(homeCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Touring)