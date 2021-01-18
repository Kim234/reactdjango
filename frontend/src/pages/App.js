
import './App.css';
import React from 'react';
import {Component} from 'react';
import FirstQuestion from '../components/FirstQuestion';
import SecondQuestion from '../components/SecondQuestion';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 


class App extends Component {
  constructor(props){   // render()보다 먼저 실행하여 초기화를 담당한다.
    super(props);
  }
  render(){
    let resultform;

    return (
      <div className="App">
       <div className="black-nav">
         <div style={{color:"white",fontSize:'30px'}}>영화 장르 추천</div>
       </div>

       <Router>
          <Route exact path='/' component={FirstQuestion}></Route>
          <Route exact path='/SecondQuestion' component={SecondQuestion}></Route>
        </Router>
      
      </div>
    );
  }  
}

export default App;