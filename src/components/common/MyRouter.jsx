import React, {Component} from 'react';
import {
    Route,
    Switch,
    Redirect,
    BrowserRouter as Router
} from "react-router-dom"
import GuardRouter from "./GuardRouter";
export default class MyRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(props)
    }

    render() {
        return (
            <Router>
                <Switch>
                {   
                    this.props.router.map(v=>(
                        <Route key={v.path} exact={v.exact} path={v.path} render={()=><GuardRouter {...v}></GuardRouter>}></Route>
                    ))
                }
                <Redirect to={"/error"} from="*"></Redirect>
            </Switch>
            </Router>
    
        )
    }
}