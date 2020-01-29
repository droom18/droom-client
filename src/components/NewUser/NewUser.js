import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
        if (response.data.token) {
          return this.props.history.push("/donations/donationRoutes");
        }
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
      <div className="newUserStyle">
        <h1>Sign Up for Luncher!</h1>
        <div className="form-container">
          <form>
            <p>First Name:</p>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <br />
            <p>Last Name:</p>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <br />
            <p> Email:</p>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            <p>Password:</p>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <p style={passwordReq}>*Password must be over 5 chars</p>
            <br />
            <button type="button" onClick={this.register}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewUser;
