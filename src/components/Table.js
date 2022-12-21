import React from "react";

import "./table.css";
function Table({ value }) {
  
  return (
    <>
      <table className="content-table">
        <thead>
          <tr>
            <th>no</th>
            <th>User Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>age</th>
            <th>Registed date</th>
          </tr>
        </thead>
        <tbody>
          {value.map((item,index) => (
            <tr key={item._id}>
              <td>{index+1}</td>
              <td>{item.username}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </>
  );
}

export default Table;
