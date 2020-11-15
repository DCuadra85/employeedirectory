
import React from "react";

const EmployeeContext = React.createContext({
  image:"www.website.com",
  name:"Will Smith",
  email:"willsmith@yahoo.com",
  phone: "555-555-5555",
  age:"55"
  
});

export default EmployeeContext;