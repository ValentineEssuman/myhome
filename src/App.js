import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/intro'
import About from './components/about'
/* import Timeline from './components/experience'
import Projects from './components/projects' */

export default class  App extends Component{

  render(){
    return (
      <div className="App">
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar/>
            <div id="colorlib-main">
              <Introduction/>
              <About/>
{/*               <Timeline/>
              <Projects/> */}
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

