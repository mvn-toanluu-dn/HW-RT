import React, { Component } from "react";
import TableUsers from "./TableUsers";
import Modal from "./Modal";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      email: "",
      password: "",
      country: "",
      gender: 0,
      info: "",
      agree: false,
      isVisible: false,
      id: null,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    const id = Math.floor(Math.random() * 1000);
    const { data, email, password, country, gender, info, agree } = this.state;
    const user = { id, email, password, country, gender, info, agree };

    this.setState({ data: [...data, user] });
  }

  handleOnChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleOnDelete() {
    const { id } = this.state;
    const newData = this.state.data.filter((user) => user.id !== id);

    this.setState({ data: newData });
    this.setState({ isVisible: false });
  }

  render() {
    const { data, isVisible, id } = this.state;
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
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
          <button>Submit</button>
        </form>
        {data.length > 0 && 
          <TableUsers
            data={data}
            onDelete={(id) => this.setState({ isVisible: true, id })}
          />
        }
        <Modal
          isVisible={isVisible}
          title="Are you sure you want to delete?"
          onSubmit={() => this.handleOnDelete()}
          onCancel={() => this.setState({ isVisible: false })}
        />
      </>
    );
  }
}

