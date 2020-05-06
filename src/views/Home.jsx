import React, { Component } from 'react'
export default class Home extends Component {
    render() {
        return (
            <div>
             首页
                <p>
                    <input type="button" value={"去定位页面"} onClick={()=>{
                        this.props.history.push("/index/selectCity")
                    }}/>  <span className={"location"}>全国</span>
                    <input type="button" value={"去演出页面"} onClick={()=>{
                        this.props.history.push("/show/ShowCategoryList")
                    }}/>
                    <input type="button" value={"去搜索页面"} onClick={()=>{
                        this.props.history.push("/search")
                    }}/>
                    <input type="button" value={"去日历页面"} onClick={()=>{
                        this.props.history.push("/calendar")
                    }}/>
                </p>
           </div>
        )
    }
    componentDidMount() {
        // console.log(111,this.props)
        // console.log(this.props.match.params);
    }
}
