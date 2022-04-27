import React, { useState } from "react";
import useField from "../Custom Hooks/useField";
export default function Form() {
  const email = useField("email");
  const password = useField("password");
  const country = useField("");
  const gender = useField("radio");
  const info = useField("");
  const agree = useField("checkbox");

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    if (
      !email.value ||
      !country.value ||
      !password.value ||
      password.value.length < 8 ||
      !agree.value
    ) {
      return;
    } else {
      const user = {
        id,
        email: email.value,
        password: password.value,
        country: country.value,
        gender: gender.value,
        info: info.value,
        agree: agree.value,
      };
      setData([...data, user]);
    }
  };

  const handleOnDelete = (user) => {
    const newData = data.filter((item) => user.id !== item.id);
    setData(newData);
  };

  return (
    <div className="user-form">
      <form onClick={(e) => handleSubmit(e)}>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input id="email" name="email" {...email} />
        </div>
        <div className="form-control">
          <label htmlFor="pwd">Password: </label>
          <input id="password" name="password" {...password} />
        </div>
        <div className="form-control">
          <label htmlFor="country">Country: </label>
          <select name="country" {...country}>
            <option>Choose your country</option>
            <option value="dn">Da Nang</option>
            <option value="hcm">Ho Chi Minh</option>
            <option value="hn">Ha Noi</option>
          </select>
        </div>
        <div className="form-control">
          <label>Gender</label>
          <input name="gender" {...gender} value="0" defaultChecked />
          Male
          <input name="gender" {...gender} value="1" />
          Female
        </div>
        <div className="form-control">
          <label htmlFor="info">Other information: </label>
          <textarea {...info} name="info" id="info"></textarea>
        </div>
        <div className="form-control">
          <label>
            Agree with our terms?
            <input name="agree" {...agree} defaultValue={false} />
          </label>
        </div>
        <div className="form-control">
          <button>Submit</button>
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
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.country}</td>
              <td>{user.gender}</td>
              <td>{user.info}</td>
              <td>
                <button onClick={() => handleOnDelete(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
