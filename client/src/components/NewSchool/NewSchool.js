import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

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

class NewSchool extends React.Component {
  constructor() {
    super();
    this.state = {
      schoolName: "",
      cityState: "",
      fundsNeeded: "",
      contact: "",
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

  addSchool = (school) => {
    axios
    // check api route
      .post(`https://luncher-backend.herokuapp.com/api/schools`, this.state)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        if (response.data.token) {
          return <Redirect to="/schools/schoolRoutes" />;
        }
        this.setState({ state: response.data });
      })
      .catch(err => console.log(err));
      this.setState({ 
      schoolName: "",
      cityState: "",
      fundsNeeded: "",
      contact: "",
      role: "admin"
    });
  };

  render() {
    return (
      <div className="newUserStyle">
        <h1>Sign Your School Up for Luncher!</h1>
        <div className="form-container">
          <form>
            <p>School Name:</p>
            <input
              type="text"
              name="schoolName"
              placeholder="School Name"
              value={this.state.schoolName}
              onChange={this.handleChange}
            />
            <br />
            <p>City and State:</p>
            <input
              type="text"
              name="cityState"
              placeholder="Last Name"
              value={this.state.cityState}
              onChange={this.handleChange}
            />
            <br />
            <p> Funds Needed:</p>
            <input
              type="text"
              name="fundsNeeded"
              placeholder="Funds Needed"
              value={this.state.fundsNeeded}
              onChange={this.handleChange}
            />
            <br />
            <p>Who Should We Contact:</p>
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={this.state.contact}
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
            <br />
            <button type="button" onClick={this.addSchool}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewSchool;
