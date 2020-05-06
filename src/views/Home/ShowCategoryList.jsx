import React, {Component} from 'react';
import style from "../../assets/style/sass/showsLibrary.module.scss"
import {connect} from "react-redux";

import showCategoryCreator from "../../store/actionCreator/Home/showCategory";
import showListCreator from "../../store/actionCreator/Home/showList";
import MyHeader from "../../compontents/MyHeader";
import ShowList from "../../compontents/ShowList";
import ShowCategroryHeader from "../../compontents/ShowCategroryHeader";
import locationCreator from "../../store/actionCreator/Home/location"
import CityDialog from "../../compontents/CityDialog";

class ShowCategoryList extends Component {
    constructor(props) {
        super(props);
        this.title = "演出"
        this.state = {
            index:0,
            isNone:true,
            city:'全国',
            city_id:''
        };
        this.isNone=true
    }

    render() {
        return (
            <div className={style.show_library}>
               <header className={style.head_nav}>
                   <MyHeader {...this.props} title={this.title}></MyHeader>
                   <ShowCategroryHeader {...this.props} city={this.state.city}  typeFiltrateDisPlay={this.typeFiltrateDisPlay.bind(this)}></ShowCategroryHeader>
               </header>
                <div className={style.main} style={this.state.isNone?{overflow:'auto'}:{overflow:'hidden'}}>
                    <ShowList {...this.props}></ShowList>
                    <div className={this.state.isNone?style.type_filtrate:style.type_filtrate1}>
                        <CityDialog {...this.props} changeCity={this.changeCity.bind(this)} typeFiltrateDisPlay={this.typeFiltrateDisPlay.bind(this)}></CityDialog>
                    </div>
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

    componentDidMount() {
        this.props.getShowCategoryList.call(this);
        this.props.getShowList.call(this);
        this.props.getCity.call(this);

    }
}
function mapStateToProps({showCategory,showList,location}) {
    return {
        showCategoryList:showCategory.showCategoryList,
        showList : showList.showList,
        // category：
        page:showList.page,
        city:location.city
    }
}
function mapDispatchToProps(dispatch) {
    return {
         getShowCategoryList(){
            dispatch(showCategoryCreator.getShowCategoryList());
        },
        getShowList(data){
            dispatch(showListCreator.getShowList(data));
        },

        getCity(){
           dispatch(locationCreator.getCity())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowCategoryList)