import './App.css';
import React from 'react';
import {Component} from 'react';
// import {NavLink} from "react-router-dom";
// import {BrowserRouter} from "react-router-dom";

class Header extends Component {

  render(){
    return (
     
      <nav class="navbar navbar-light" className="black-nav">
        <div style={{color:"#000000",fontSize:'20px',  left:'264px', top:'31px', zIndex:'1'}}><strong>영화 장르 추천</strong> by taeseop</div>
        <hr style={{height:"5px"}}></hr>
      </nav>
      
    );
  }  
}

export default Header;