
import Login from "../views/Login";
import Theater from "../views/Theater";
import Error from "../views/Error";
import Index from "../views/Index";

import Ticket from "../views/Ticket";
import Home from "../views/Home";
import My from "../views/My";
export default [
    {
        path:"/login",
        component:Login
    },
    {
        path:"/error",
        component:Error
    },
    {
        path:"/",
        component:Index,
        childrens:[
            {
                path:"/",
                component:Home,
                exact:true
            },{
                path:"/my",
                component:My,
                // isAuthorization:true
            },
            {
                // theater 剧院的意思
                path:"/theater",
                component:Theater,
                // isAuthorization:true
            },
            {
                // ticket 票的意思
                path:"/ticket",
                component:Ticket,
                // isAuthorization:true
            }
        ]
    }
    
]