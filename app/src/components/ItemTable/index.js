import React, { Component } from "react";

export default class ItemUser extends Component {
  render() {
    const { user, onClick } = this.props;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.country}</td>
        <td>{user.gender}</td>
        <td>{user.info}</td>
        <td>
          <button onClick={() => onClick(user.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}
