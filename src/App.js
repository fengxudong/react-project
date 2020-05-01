import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom"
import Login from "./views/Login"
import Index from "./views/Index"
import SelectCity from "./views/Index/SelectCity";
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
               <Route path={"/login"} component={Login}></Route>
              {/*城市选择路由*/}
                <Route path={"/selectCity"} component={SelectCity}/>
               <Route path={"/error"} component={()=><div>404，你找的页面不存在</div>}></Route>
               <Route path={"/"}  component={Index}></Route>
          </Switch>
        </Router>
    </div>
  );  
}

export default App;
