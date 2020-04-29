import React, { Component } from 'react'

export default class Ticket extends Component {
    render() {
        return (
            <div>
                我是票夹页面
                <button onClick={()=>{
                    this.props.history.push("/login")
                }}>去登陆</button>
            </div>
        )
    }
}
