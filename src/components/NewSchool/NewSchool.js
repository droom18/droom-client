import React from "react";
import { axiosWithAuth } from "../../axios/axiosWithAuth";

class NewSchool extends React.Component {
  constructor() {
    super();
    this.state = {
      schoolName: "",
      state: "",
      zip: "",
      fundsNeeded: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  addSchool = school => {
    console.log("new school:", school);
    axiosWithAuth()
      .post(`https://luncher-backend.herokuapp.com/api/admin/school`, school)
      .then(response => {
        this.setState({ state: response.data });
      })
      .catch(err => console.log(err));
    this.setState({
      schoolName: "",
      state: "",
      zip: "",
      fundsNeeded: ""
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
            <p>State:</p>
            <input
              type="text"
              name="state"
              placeholder="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
            <br />
            <p>Zip Code:</p>
            <input
              type="text"
              name="zip"
              placeholder="zip"
              value={this.state.zip}
              onChange={this.handleChange}
            />
            <br />
            <p>Funds Needed:</p>
            <input
              type="text"
              name="fundsNeeded"
              placeholder="funds needed"
              value={this.state.fundsNeeded}
              onChange={this.handleChange}
            />
            <br />
            <button type="button" onClick={() => this.addSchool(this.state)}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewSchool;