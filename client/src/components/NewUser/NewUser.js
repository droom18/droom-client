import React from "react";
import axios from "axios";

const newUserStyle = {
  border: "pink solid 2px",
  margin: "20px 0",
  padding: "15px 10px"
  // display: "flex"
};

const passwordReq = {
  fontSize: "11px",
  margin: "0px"
};

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "admin"
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  register = () => {
    axios
      .post(`https://luncher-backend.herokuapp.com/api/register`, this.state)
      .then(response => {
        localStorage.setItem("token", response.data.token);
      })
      .catch(err => console.log(err));

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: ""
    });
  };

  render() {
    return (
      <div style={newUserStyle}>
        <h1>This is the registration page</h1>
        <form>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          Email:
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <p style={passwordReq}>*Password must be over 5 chars</p>
          {/* Role: */}
          {/* <input
            type="text"
            name="role"
            placeholder="Role"
            value={this.state.role}
            onChange={this.handleChange}
          /> */}
          {/* <br />
          <input
            type="radio"
            name="role"
            value={this.state.role}
            onChange={this.handleChange}
          />
          <label htmlFor="admin"> Administrator</label>
          <br />
          <input
            type="radio"
            name="role"
            value={this.state.role}
            onChange={this.handleChange}
          />
          <label htmlFor="donor"> Donor</label>
          <br /> */}
          <button type="button" onClick={this.register}>
            Add new user button
          </button>
        </form>
      </div>
    );
  }
}

export default NewUser;
