import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from "./store"
import * as serviceWorker from './serviceWorker';
// 引入重置样式
import "./assets/style/css/reset.css"
// 引入将px 转为rem的插件
import "lib-flexible";
// axios
import axios from "axios";

React.Component.prototype.$axios = axios;

// axios 请求拦截
axios.interceptors.request.use(config=>{
    config.url = "/jc"+config.url;
    return config;
})

// axios 响应拦截
axios.interceptors.response.use(({data})=>{
    return data;
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
          <App />
      </Provider>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
