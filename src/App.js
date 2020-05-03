import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom"
import Login from "./views/Login"
import Index from "./views/Index"
import SelectCity from "./views/Home/SelectCity";
import ShowCategoryList from "./views/Home/ShowCategoryList";
import Calendar from "./views/Home/Calendar";
import Cardproduct from "./views/Home/Cardproduct";
import Search from "./views/Home/Search";
import Vip from "./views/Home/Vip";
import Plus from "./views/Home/Plus";
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
               <Route path={"/login"} component={Login}></Route>
              {/*定位*/}
                <Route path={"/index/selectCity"} component={SelectCity}/>
                {/*showCategory*/}
                <Route path={"/show/ShowCategoryList"} component={ShowCategoryList}/>
               <Route path={"/calendar"} component={Calendar}/>
               <Route path={"/search"} component={Search}/>
               <Route path={"/cardproduct"} component={Cardproduct}/>
               <Route path={"/vip"} component={Vip}/>
               <Route path={"plus"} component={Plus}/>
               <Route path={"/error"} component={()=><div>404，你找的页面不存在</div>}></Route>
               <Route path={"/"}  component={Index}></Route>
          </Switch>
        </Router>
    </div>
  );  
}

export default App;
