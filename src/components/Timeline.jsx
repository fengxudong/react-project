import React, { Component } from 'react'
import style from "../assets/css/theater.module.css"
import axios from "axios"
export default class Timeline extends Component {
    render() {
        return (
            <div>
                <div className={style.wrap}>
                    <ul className={style.timeline}>
                        <li>
                            <span>05月29日</span> 
                            <b></b>
                            <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                        </li>
                        <li>
                            <span>05月30日</span>
                            <b></b>
                            <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                        </li>
                        <li>
                            <span>06月04日</span>
                            <b></b>
                            <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                        </li>
                        <li>
                            <span>06月04日</span>
                            <b></b>
                            <a href=""><img src={require('../assets/image/2.jpg')} alt=""/></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    async componentDidMount(){
        const {data} = await axios.get("/jc/theatre/index/getTheatreList");
        this.setState({
            theater:
                data.data.theatre_list,
            // show:
            //     data.data.theatre_list.showList
        })
        console.log(this.state.theater);
        console.log(this.state.show);
    }
        
    
}
