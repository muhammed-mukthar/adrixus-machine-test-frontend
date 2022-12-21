import React from "react";

function Tables({ value }) {
  return (
    <div>
      <div class="  table-responsive">
        <table class="table shadow  ">
          <thead class="table-dark">
            <tr>
            <th scope="col">no</th>
            <th scope="col">User Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Email</th>
            <th scope="col">age</th>
            <th scope="col">Registed date</th>
            </tr>
          </thead>
          <tbody class="searchable">
        
              {value.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
          
          </tbody>
        </table>
      </div>
   
    </div>
  );
}

export default Tables;
