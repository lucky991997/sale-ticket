import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.less'
import 'antd/dist/antd.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import './config/firebaseConfig'
import store from'./store'
 


ReactDOM.render(
  <Provider store={store}>


    <App />

  </Provider>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
