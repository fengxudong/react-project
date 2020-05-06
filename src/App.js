import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom"
import Login from "./views/Login"
import Index from "./views/Index"
import Detail from "./views/Detail"
import TheaterList from "./views/TheaterList"
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
               <Route path={"/login"} component={Login}></Route>
               <Route path={"/detail"} component={Detail}></Route>
               <Route path={"/theater/theaterlist"} component={TheaterList}></Route>
               <Route path={"/error"} component={()=><div>404，你找的页面不存在</div>}></Route>
               <Route path={"/"}  component={Index}></Route>
          </Switch>
        </Router>
    </div>
  );  
}

export default App;
