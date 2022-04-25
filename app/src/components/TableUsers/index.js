import React, { Component } from "react";
import ItemTable from "../ItemTable";

export default class TableUsers extends Component {
  render() {
    const { data, onDelete } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Password</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <ItemTable
                user={user}
                key={user.id}
                onClick={() => onDelete(user.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
