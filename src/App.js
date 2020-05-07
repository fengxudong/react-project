import React from "react";
// 发布与订阅
import pubsub from "pubsub-js";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom"
import {connect} from "react-redux"
import Login from "./views/Login"
import Index from "./views/Index"
import Plus from "./views/home/Plus";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.boll = true;
    }

    render() {
        return (
            <div className={"App"} style={{height: window.innerHeight}}
                 onScroll={this.handleScroll.bind(this)}>
                <Router>
                    <Switch>
                        <Route path={"/login"} component={Login}></Route>
                        <Route path={"/plus"} component={Plus}></Route>
                        <Route path={"/error"} component={() => <div>404，你找的页面不存在</div>}></Route>
                        <Route path={"/"} component={Index}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }

    // 处理滚动监听
    handleScroll() {
        // 获取当前App 元素
        if (this.boll) {
            const app = document.querySelector(".App");
            // 获取App 下面第一个子级元素 home
            const homeBox = app.firstElementChild;
            // 判断 当前的页面如果是 home 页面 才可以执行发布者流程
            if (homeBox.className === "home_home__2IjF-") {
                // 获取 home 页面的总高度
                const homeBoxH = parseInt(getComputedStyle(homeBox).height);
                // 判断 滚动的高度 加上 500 + 底部导航 的高度 是否大于 home的高度
                if (app.scrollTop + 500 + 736 > homeBoxH) {
                    // 再次获取消息
                    pubsub.publish("page", this.props.page + 1);
                    this.boll = false;
                }
            }
        }

    }
}

// 映射当前仓库 的 state 属性 到 当前组件的props
function mapStateToProps(state) {
    return {
        page: state.home.page,
    };
}

export default connect(mapStateToProps, null)(App);
