import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom"
import Login from "./views/Login"
import Index from "./views/Index"
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
               <Route path={"/login"} component={Login}></Route>
               <Route path={"/error"} component={()=><div>404，你找的页面不存在</div>}></Route>
               <Route path={"/"}  component={Index}></Route>
          </Switch>
        </Router>
    </div>
  );  
}

export default App;
