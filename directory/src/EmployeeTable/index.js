import React from "react";
import "./style.css";

function EmployeeTable(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <thead>
          <tr>
            <th>
              <strong>Image:</strong> {props.image}
            </th>
            <th>
              <strong>Name:</strong> {props.name}
            </th>
            <th>
              <strong>Phone:</strong> {props.phone}
            </th>
            <th>
              <strong>Email:</strong> {props.email}
            </th>
            <th>
              <strong>DOB:</strong> {props.dob}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-src=""></td>
          </tr>
        </tbody>

      </div>
    </div>
  );
}

export default EmployeeTable;
