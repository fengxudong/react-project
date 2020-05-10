import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom"
import Reg from './views/Reg'
import Login from "./views/Login"
import Index from "./views/Index"
import Order from './views/my/Order'
import SetYm from './views/my/SetYm';
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
               <Route path={"/login"} component={Login}></Route>
               <Route path={"/reg"} component={Reg}></Route>
               {/* 订单 */}
               <Route path={"/order"} component={Order}></Route>
               {/* 设置 */}
               <Route path={"/set"} component={SetYm}></Route>
               <Route path={"/error"} component={()=><div>404，你找的页面不存在</div>}></Route>
               <Route path={"/"}  component={Index}></Route>
          </Switch>
        </Router>
    </div>
  );  
}

export default App;
