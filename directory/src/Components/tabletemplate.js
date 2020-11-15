import React from "react";

function EmployeeTable(employee) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={employee.name} src={employee.image} />
      </div>
      <div className="content">
        <thead>
          <tr>
            <th>
              <strong>Image:</strong> 
            </th>
            <th>
              <strong>Name:</strong>
            </th>
            <th>
              <strong>Phone:</strong> 
            </th>
            <th>
              <strong>Email:</strong> 
            </th>
            <th>
              <strong>DOB:</strong> 
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {employee.image}</td>
            <td> {employee.name}</td>
            <td> {employee.phone}</td>
            <td> {employee.email}</td>
            <td> {employee.dob}</td>
          </tr>
        </tbody>

      </div>
    </div>
  );
}

export default EmployeeTable;
