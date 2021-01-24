
import './App.css';
import React from 'react';
import {Component} from 'react';
import FirstQuestion from '../components/FirstQuestion';
import SecondQuestion from '../components/SecondQuestion';
import ThirdQuestion from '../components/ThirdQuestion';
import FourthQuestion from '../components/FourthQuestion';
import FifthQuestion from '../components/FifthQuestion';
import SixthQuestion from '../components/SixthQuestion';
import SeventhQuestion from '../components/SeventhQuestion';
import EighthQuestion from '../components/EighthQuestion';
import NinethQuestion from '../components/NinethQuestion';
import TenthQuestion from '../components/TenthQuestion';
import EleventhQuestion from '../components/EleventhQuestion';
import TwelfthQuestion from '../components/TwelfthQuestion';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  constructor(props){   // render()보다 먼저 실행하여 초기화를 담당한다.
    super(props);
    this.onChangeFirst = this.onChangeFirst.bind(this);
    this.state = {
      ans:0,
      total=[]
  }
  }

  onChangeFirst = (answer,number) => {
    if(number === 1){
      console.log('First Answer');
      this.setState({ans : answer});
      console.log('First Answer', this.state.firstAns);
    }
    else if(number === 2){
      console.log('Second Answer');
      this.setState({ans : answer});
      console.log('Second Answer', this.state.secondAns);
    }
    else if(number === 3){
      console.log('Third Answer');
      this.setState({ans : answer});
      console.log('Third Answer', this.state.thirdAns);
    }
    else if(number === 4){
      this.setState({ans : answer});
    }
   else if(number === 5){
      this.setState({ans : answer}); 
    }
   else if(number === 6){
      this.setState({ans : answer});
    }
   else if(number === 7){
      this.setState({ans : answer});
    }
   else if(number === 8){
      this.setState({ans : answer});
    }
   else if(number === 9){
      this.setState({ans : answer});
    }
   else if(number === 10){
      this.setState({ans : answer});
    }
   else if(number === 11){
      this.setState({ans : answer});
    }
   else if(number === 12){
      this.setState({ans : answer});
    }
  
}

  render(){
    return (
        <div className="App">
          <Router>
            <Route exact path='/' render={()=><FirstQuestion onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/SecondQuestion' render={()=><SecondQuestion  onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/ThirdQuestion' render={()=><ThirdQuestion onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/FourthQuestion' render={()=><FourthQuestion onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/FifthQuestion' render={()=><FifthQuestion onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/SixthQuestion' render={()=><SixthQuestion onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/SeventhQuestion' render={()=><SeventhQuestion onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/EighthQuestion' render={()=><EighthQuestion onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/NinethQuestion' render={()=><NinethQuestion onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/TenthQuestion' render={()=><TenthQuestion onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/EleventhQuestion' render={()=><EleventhQuestion onChange = {this.onChangeFirst}/>}/>
            <Route exact path='/TwelfthQuestion' render={()=><TwelfthQuestion onChange = {this.onChangeFirst}/>}/>
          </Router>
        </div>

    );
  }  
}

export default App;