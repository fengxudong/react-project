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
import SelectCity from "./views/Home/SelectCity";
import ShowCategoryList from "./views/Home/ShowCategoryList";
import Calendar from "./views/Home/Calendar";
import Search from "./views/Home/Search";
// import Vip from "./views/Home/Vip";
// import Plus from "./views/Home/Plus";
// function App() {
//   return (
//     <div className="App">
//         <Router>
//           <Switch>
//               <Route path={"/test"} component={Test}/>
//                <Route path={"/login"} component={Login}></Route>
//               {/*定位*/}
//                 <Route path={"/index/selectCity"} component={SelectCity}/>
//                 {/*<Route path={"/cityDialog"} component={CityDialog}/>*/}
//                 {/*showCategory*/}
//                 <Route path={"/show/ShowCategoryList"} component={ShowCategoryList}/>
//                 {/*日历*/}
//                <Route path={"/calendar"} component={Calendar}/>
//                {/*搜索*/}
//                <Route path={"/search"} component={Search}/>
//                <Route path={"/error"} component={()=><div>404，你找的页面不存在</div>}></Route>
//                <Route path={"/"}  component={Index}></Route>
//           </Switch>
//         </Router>
//     </div>
//   );
// =======
import Plus from "./views/Home/Plus";
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
                        {/*定位*/}
                        <Route path={"/selectCity"} component={SelectCity}/>
                        {/*演出*/}
                        <Route path={"/showCategoryList"} component={ShowCategoryList}/>
                        {/*日历*/}
                       <Route path={"/calendar"} component={Calendar}/>
                        {/*搜索*/}
                        <Route path={"/search"} component={Search}/>

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
