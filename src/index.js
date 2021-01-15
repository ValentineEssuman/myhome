import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
// import Home from './components/home'
import * as serviceWorker from './serviceWorker'

const Pagerouts = (
  <Router>
    <div>
      <Route path="/" component={App}/>
    </div>
  </Router>
)

ReactDOM.render(
  //<React.StrictMode>
    Pagerouts,
  //</React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
