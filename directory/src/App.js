import React, { Component } from "react";
import NavBar from "./Components/Navbar"
import EmployeeTable from "./Components/tabletemplate"
import AscendSort from "./SortButtons/AscendSort"
import DescendSort from "./SortButtons/DescendSort"
import Form from "./Components/searchForm"
import Wrapper from "./Wrapper"
import employees from "./employees.json"

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

  //sort A-Z function
  sortEmployees = (employees) => {
    const newEmployees = [...employees];
    newEmployees
      .sort(function (x, y) {
        if (x.name.toLowerCase() < y.name.toLowerCase()) return -1;
        if (x.name.toLowerCase() > y.name.toLowerCase()) return 1;
        return 0;
      })
    this.setState({ employees: newEmployees });
  }
  //sort Z-A function
  sortReverseEmployees = (employees) => {
    const newEmployees = [...employees];
    newEmployees
      .sort(function (x, y) {
        if (x.name.toLowerCase() > y.name.toLowerCase()) return -1;
        if (x.name.toLowerCase() < y.name.toLowerCase()) return 1;
        return 0;
      })
    this.setState({ employees: newEmployees });
  };

  filterEmployees = (event) => {
    event.preventDefault();
    if (!this.state.filter) {
      return
    }
    const employee = employees.filter(
      (employees) => employees.name.toLowerCase() === this.state.filter.toLowerCase()
    );
    this.setState({ employees: employee });
  };

  handleOnChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    if (!value) {
      this.setState({ employees })
    }
  };

  render() {
    return (
   <> 
    <Wrapper>
      <NavBar />

      <Form handleOnChange={this.handleOnChange} filter={this.state.filter} filterEmployees={this.filterEmployees} />
      <AscendSort handleButtonClickAsc={this.handleButtonClickAsc}>
        Sort by Name A-Z
        </AscendSort>
      <DescendSort handleButtonClickDesc={this.handleButtonClickDesc}>
        Sort by Name Z-A
        </DescendSort>
      {this.state.employees.map((employee) => (
        <EmployeeTable
          image={employee.image}
          name={employee.name}
          phone={employee.phone}
          email={employee.email}
          dob={employee.dob}
        />
      ))};
      </Wrapper>
      </>
    );

  }
}

export default App;