import React, {Component} from "react";
import Wrapper from "./Wrapper"



class App extends Component {
  state = {
    friends,
    filter: ""
  };

  handleButtonClickAsc = (event) => {
    event.preventDefault();
    //console.log("reached btn click, ", this.state.friends)
    this.sortEmployees(this.state.friends);
  };

  handleButtonClickDesc = (event) => {
    event.preventDefault();
    //console.log("reached btn click, ", this.state.friends)
    this.sortReverseEmployees(this.state.friends);
  };



  render() {

  }
}



export default App;
