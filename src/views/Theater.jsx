import React, { Component } from 'react'
import style from "../assets/css/theater.module.css";
import axios from "axios";
export default class Theater extends Component {
    constructor(props){
        super(props);
        this.state = {
           theater:[],
           show:[]
        };
    }
    render() {
        return (
            <div className={style.bg}>
                <div className={style.head}>
                    剧院
                </div>
                <div className={style.main}>
                    {
                        this.state.theater.map(v=>{
                            return(
                            <div className={style.content} key={v.id}>
                                <div>
                                    <div>
                                        <img src={v.pic} alt=""/>
                                    </div>
                                    <div>
                                        <p>{v.name}</p>
                                        <p>{v.count}场在售演出</p>
                                        <a href={"./theater/theaterlist/" + v.id}><i className="iconfont icon-gengduo"></i></a>
                                    </div>
                                </div>
                                     <div >
                                        <ul className={style.timeline}>
                                            <li>
                                                <span>05月29日</span>
                                                <b></b>
                                                <a href=""><img src={require('../assets/image/3.jpg')} alt=""/></a>
                                            </li>
                                            <li>
                                                <span>05月30日</span>
                                                <b></b>
                                                <a href=""><img src={require('../assets/image/4.jpg')} alt=""/></a>
                                            </li>
                                            <li>
                                                <span>06月04日</span>
                                                <b></b>
                                                <a href=""><img src={require('../assets/image/5.jpg')} alt=""/></a>
                                            </li>
                                        </ul>
                                    </div>    
                            </div>)
                        })
                    } 
                </div>
            </div>
        )
    }
    async componentDidMount(){
        const {data} = await axios.get("/jc/theatre/index/getTheatreList");
        this.setState({
            theater:
                data.data.theatre_list,
            show:
                data.data.theatre_list.showList
        })
        console.log(this.state.theater);
        console.log(this.state.show);

    }
}
