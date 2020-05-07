import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                我是登录页面
                <button onClick={this.ret.bind(this)}>返回</button>
            </div>
        )
    }
    ret(){
<<<<<<< HEAD
        this.props.history.go(-1)
=======
        this.props.history.go(-1);
>>>>>>> li
    }
}
