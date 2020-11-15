import React, {Component} from "react";
import Wrapper from "./Wrapper"



class App extends Component {
  state = {
    employees,
    filter: ""
  };

  handleButtonClickAsc = (event) => {
    event.preventDefault();
    this.sortEmployees(this.state.employees);
  };

  handleButtonClickDesc = (event) => {
    event.preventDefault();
    this.sortReverseEmployees(this.state.employees);
  };

  sortEmployees = (employees) => {
    const newEmployees = [...employees];
    newEmployees
    .sort(function(x, y) { 
      if (x.name.toLowerCase() < y.name.toLowerCase()) return -1;
      if (x.name.toLowerCase() > y.name.toLowerCase()) return 1;
      return 0;
    })
    this.setState({employees: newEmployees});
  }

  sortReverseEmployees = (employees) => {
    const newEmployees = [...employees];
    newEmployees
      .sort(function (x, y) {
        if (x.name.toLowerCase() > y.name.toLowerCase()) return -1;
        if (x.name.toLowerCase() < y.name.toLowerCase()) return 1;
        return 0;
      })
    this.setState({employees: newEmployees});
  };

  filterEmployees = (event) => {
    event.preventDefault();
    if(!this.state.filter){
      return
    }
    const employee = employees.filter(
      (employees) => employees.name.toLowerCase() === this.state.filter.toLowerCase()
    );
    this.setState({ employees: employee });
  };

  render() {

  }
}



export default App;
