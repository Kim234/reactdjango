//django+react+db 확인

import React ,  {Component} from "react";
import {render} from "react-dom";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
          };
    }


    async componentDidMount() {
      try{
        const res= await fetch("http://127.0.0.1:8000/movie/map_main");
        const posts = await res.json();
        this.setState({
          posts
        });
      } catch(e){
          console.log(e);
      }
    }
    
      render() {
        const {posts}=this.state;
        if(!posts[0]){
            return (<div>still waiting</div>);
        }
        else{
            return(<div>{posts[0].movie_name}</div>);
        }
        
      }
}

export default App;