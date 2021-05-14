import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';


import { render } from 'react-dom';
import './style.css';


import reducers from "./redux/reducers"
import App from "./containers/App_container";


const Store = createStore(reducers);


render(
  <Provider store={Store}><App /></Provider>,
  document.getElementById('root')
);
