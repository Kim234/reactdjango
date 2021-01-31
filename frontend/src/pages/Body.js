import "./App.css";
import React from "react";
import Question from "../components/Question";
import Home from "../components/Home";
import Result from "../components/Result";
import { Route,BrowserRouter } from "react-router-dom";

class Body extends React.Component {
  render(){
    return(
        <div className="App">
          <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Question" component={Question}></Route>
            <Route exact path="/Result" component={Result}></Route>
          </BrowserRouter>
        </div>
    );
  }
}

export default Body;
