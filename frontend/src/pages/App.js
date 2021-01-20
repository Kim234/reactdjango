
import './App.css';
import React from 'react';
import {Component} from 'react';
import imgfile from '../images/taeseop.jpg'

class App extends Component {
  

  render(){
    return (
      <div className="App">
        <div className="black-nav">
          <div class="circle">
            <img class="taeseop" src={imgfile} alt=""></img>
          </div>
          <div style={{color:"red",fontSize:'80px', display:'inline-block'}}>Taeseop's Genre Recommend</div>
        </div>
        <p style={{clear:"both"}}>&nbsp;</p>

        
      </div>
      

    );
  }  
}

export default App;