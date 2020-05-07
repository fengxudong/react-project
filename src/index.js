import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
=======
// import './index.css';
>>>>>>> li
import App from './App';
import {Provider} from "react-redux"
import store from "./store"
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
          <App />
      </Provider>
      
  </React.StrictMode>,
  document.getElementById('root')
=======
// 引入px2rem插件
import "lib-flexible";
//引入axios
import axios from "axios";
React.Component.prototype.$axios = axios;
//设置请求拦截
axios.interceptors.request.use(config=>{
    config.url = "/jc" +config.url;
    return config;
})

axios.interceptors.response.use(({data})=>{
    return data;
})
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
>>>>>>> li
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
