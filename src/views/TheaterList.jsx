import React, { Component } from 'react'
import style from "../assets/css/theaterlist.module.css"
import axios from "axios"
export default class TheaterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theatre_id:2,
            theaterlist:[],
            page:0,
            result:[]
        };
    }
    render() {
        // const {result} = this.props;
        return (
            <div>
                <div className={style.main}>
                    {/* 头部 */}
                    {
                        this.state.theaterlist.map(v=>(
                            <div className={style.bg} key={v.theatre_id}>
                                <p>
                                    <i className="iconfont icon-houtui"></i>
                                </p>
                                <div className={style.content}>
                                    <div>
                                        <div className={style.cirle}>
                                            <img src={v.theatre_pic} alt=""/>
                                        </div>
                                        <div>
                                            <p>{v.theatre_name}</p>
                                            <p>{v.sch_num}场在售演出</p>
                                        </div>
                                    </div>
                                    <p>{v.city_name} | {v.theatre_address}</p>
                                    <div>
                                        <i className="iconfont icon-dingwei"></i>
                                    </div>
                                </div>
                            </div>
                        ))
                    }   
                    {/* 热门演出 */}
                    <div className={style.hot}>
                        <p>热门演出</p>
                        {
                            this.state.result.map(v=>(
                                <div className={style.film} key={v.show_id}>
                                    <div>
                                        <a href="/detail"><img src={v.pic} style={{width:"100%",height:"100%"}} alt=""/></a>
                                    </div> 
                                    <div>
                                        <p>2020.{v.show_time_top}</p>
                                        <div>{v.name}</div>
                                        <p>{v.city_name} | {v.venue_name}</p>
                                        <div>{v.support_desc.map(m=>{
                                                return (<div>{m}</div>)
                                            })}
                                        </div>
                                        <p>￥{v.min_price}<span> 起</span></p>
                                    </div>
                                </div>
                            ))
                        }   
                    </div>
                </div> 
                
                {/* 底部 */}
                <div className={style.foot}>
                    没有更多了
                </div>
            </div>
        )
    }
    async hot(){
        const {data} = await axios.get("/jc/Show/Search/getShowList",{
            params:{
                page:this.state.page
            }
        })
        this.setState({
            page:data.data.page,
            
            result:
                data.data.list
            
        })
        console.log(data.data.list);
        console.log(this.state.result);
    }
    async componentDidMount(){
        const {data} = await axios.get("/jc/theatre/index/getTheatreInfo",{
            params:{
                theatre_id:this.state.theatre_id,
            }
        })
        this.setState({
            theatre_id:data.data.theatre_id,
            theaterlist:[
                data.data
            ]
        })
        console.log(data.data.theatre_id);
        console.log(this.state.theaterlist)
        this.hot();
    }
}
