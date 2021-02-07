import React ,  {Component} from "react";
import {render} from "react-dom";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
          };
    }

    componentDidMount() {
        fetch("map_main")
          .then(response => {
            if (response.status !=200) {
              return this.setState(() => {
                return { placeholder: "Something went wrong!" };
              });
            }
            return response.json();
          })
          .then(data => {
            this.setState(() => {
              return {
                data,
                loaded: true
              };
            });
          });
      }
    
      render() {
        const {data,loaded,placeholder}=this.state;
        if(!data[0]){
            return (<div>still waiting</div>);
        }
        else{
            return(<div>{data[0].movie_name}</div>);
        }
        
      }
}

export default App;