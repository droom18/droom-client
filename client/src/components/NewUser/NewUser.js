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
      role: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div style={newUserStyle}>
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
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <p style={passwordReq}>*Password must be over 5 chars</p>
          Role:
          {/* <input
            type="radio"
            name="role"
            placeholder="Role"
            value={this.state.role}
          /> */}
          <br />
          <input
            type="radio"
            name="role"
            value={this.state.role}
            onChange={this.handleChange}
          />
          <label for="admin"> Administrator</label>
          <br />
          <input
            type="radio"
            name="role"
            value={this.state.role}
            onChange={this.handleChange}
          />
          <label for="donor"> Donor</label>
          <br />
          <input type="submit" value="Add new user button" />
        </form>
      </div>
    );
  }
}

export default NewUser;
