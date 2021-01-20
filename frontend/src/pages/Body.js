
import './App.css';
import React from 'react';
import {Component} from 'react';
import FirstQuestion from '../components/FirstQuestion';
import SecondQuestion from '../components/SecondQuestion';
import ThirdQuestion from '../components/ThirdQuestion';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import imgfile from '../images/harry.jpg'


class App extends Component {
  constructor(props){   // render()보다 먼저 실행하여 초기화를 담당한다.
    super(props);
    this.onChangeFirst = this.onChangeFirst.bind(this);
    this.state = {
      firstAns : 0,
      secondAns : 0,
      thirdAns : 0,
      fourthAns : 0
  }
  }

  onChangeFirst = (answer,number) => {
    if(number === 1){
        console.log('First Answer');
        this.setState({firstAns : answer});
        console.log('First Answer', this.state.firstAns);
    }
    else if(number === 2){
        console.log('Second Answer');
        this.setState({secondAns : answer});
        console.log('Second Answer', this.state.secondAns);
    }
    else if(number === 3){
        console.log('Third Answer');
        this.setState({thirdAns : answer});
        console.log('Third Answer', this.state.thirdAns);
    }
}

  render(){
    return (
        <div className="App">
          <Router>
            <Route exact path='/' render={()=><FirstQuestion onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/SecondQuestion' render={()=><SecondQuestion  onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/ThirdQuestion' render={()=><ThirdQuestion onChange = {this.onChangeFirst}/>}/>
          </Router>
        </div>

    );
  }  
}

export default App;