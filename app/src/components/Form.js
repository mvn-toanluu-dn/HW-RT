import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      email: "",
      password: "",
      country: "",
      gender: "",
      info: "",
      agree: false,
    };
    this.handleOnChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const { data, email, password, country, gender, info, agree } = this.state;
    const user = { id, email, password, country, gender, info, agree };

    this.setState({ data: [...data, user] });
    e.target.reset();
  }

  handleOnChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleOnDelete(id) {
    const newData = this.state.data.filter((user) => user.id !== id);
    this.setState({ data: newData });
  }

  render() {
    return (
      <div className="user-form">
        <form>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="pwd">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="country">Country: </label>
            <select
              name="country"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            >
              <option>Choose your country</option>
              <option value="dn">Da Nang</option>
              <option value="hcm">Ho Chi Minh</option>
              <option value="hn">Ha Noi</option>
            </select>
          </div>
          <div className="form-control">
            <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value="0"
              defaultChecked={this.state.gender === "0"}
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="1"
              defaultChecked={this.state.gender === "1"}
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            />
            Female
          </div>
          <div className="form-control">
            <label htmlFor="info">Other information: </label>
            <textarea
              onChange={(e) => {
                this.handleOnChange(e);
              }}
              name="info"
              id="info"
            ></textarea>
          </div>
          <div className="form-control">
            <label>
              Agree with our terms?
              <input
                type="checkbox"
                name="agree"
                defaultChecked={this.state.agree}
                onChange={(e) => {
                  this.handleOnChange(e);
                }}
              />
            </label>
          </div>
          <div className="form-control">
            <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </div>
        </form>
        <table className="user-data">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Password</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Info</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((user) => (
              <tr key={user}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.country}</td>
                <td>{user.gender}</td>
                <td>{user.info}</td>
                <td>
                  <button onClick={() => this.handleOnDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;
