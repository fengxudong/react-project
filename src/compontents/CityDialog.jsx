import React, {Component} from 'react';
import style from "../assets/style/sass/cityDialog.module.scss";
import {connect} from "react-redux"
import cityListCreator from "../store/actionCreator/Home/cityList"
class CityDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:-1,
        };
    }

    render() {
        return (
           <section className={style.dialog}>
               <div className={style.filtrate_bg}></div>
               <div className={style.filtrate_data}>
                    <div className={style.city_list}>
                        <h3 className={style.title}>
                           城市
                        </h3>
                        <div className={style.list_wrap}>
                            <ul className={style.list}>
                                <li onClick={()=>{
                                    // this.props.getShowList.call(this,0,0);
                                    this.setState({
                                        index:-1
                                    })
                                    console.log(this)
                                    // this.props.changeCity.call(this,"全国")
                                    localStorage.city = "全国"
                                    this.props.changeCity1({
                                        city_id:0
                                    })
                                }} className={this.state.index === -1?style.active:""} >全国</li>
                                {/*<li className={style.active} >全国</li>*/}

                                {
                                   this.props.cityList.map((v,i)=>{
                                      return (
                                          <li key={v.id} className={i===this.state.index?style.active:''}
                                              onClick={()=>{
                                                  // this.props.changeCity.call(this,v.name)
                                                  localStorage.city = v.name
                                                  // this.props.changeCity1({
                                                  //     city_id:v.id
                                                  // })
                                                  localStorage.city_id = v.id
                                                  this.changeActive(i);
                                                  this.props.changeCity(v.name)
                                              }}>{v.name}</li>
                                      )
                                   })
                                }
                            </ul>
                        </div>
                    </div>
                   <div className={style.foot}>
                        <span onClick={()=>{
                            // this.props.getShowList.call(this,0,0);
                            this.setState({
                                index:-1
                            })
                            localStorage.city = "全国"
                        }} className={this.state.index === -1?style.active:""}>重置</span>
                       <span className={style.active1} onClick={()=>{
                           // this.props.getShowList.call(this,{
                           //     city_id:Number(localStorage.city_id),
                           //     category:Number(localStorage.category)
                           // });
                           this.props.getShowList({
                               city_id:Number(localStorage.city_id),
                               category:Number(localStorage.category)
                           });
                           this.props.typeFiltrateDisPlay(true);
                       }}>确定</span>
                   </div>
               </div>
           </section>
        )
    }
     componentDidMount() {
       this.props.getCityList();
       // localStorage.city_id = 0;
    }

    changeActive(num){
        this.setState({
            index:num
        })
    }
}

function mapStateToProps({cityList}) {
    return {
        cityList : cityList.cityList,
        city_id:0
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getCityList(){
            dispatch(cityListCreator.getCityList())
        },
        changeCity1(payload){
            dispatch({
                type:'CHANGE_CITY1',
                payload
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CityDialog);

