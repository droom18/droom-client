import React, { Component } from "react";
import { axiosWithAuth } from "../../axios/axiosWithAuth";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      fundsNeeded: 0,
      fundsReceived: "",
      state: "",
      zip: "",
      message: "",
      addedFunds: 0
    };
  }

  handleChange = e => {
    console.log(typeof e.target.value);
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10)
    });
  };

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push("/credentials/loginRoutes");
    } else {
      axiosWithAuth()
        .get("https://luncher-backend.herokuapp.com/api/admin/school")
        .then(res => {
          console.log(typeof res.data.fundsNeeded);
          this.setState({
            schoolName: res.data.schoolName,
            fundsNeeded: res.data.fundsNeeded,
            fundsReceived: res.data.fundsReceived,
            state: res.data.state,
            zip: res.data.zip,
            message: res.data.message
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({ error: err });
        });
      this.setState({
        schoolName: "",
        fundsNeeded: 0,
        fundsReceived: 0,
        state: "",
        zip: "",
        message: ""
      });
    }
  }

  addFunds = () => {
    console.log(this.state);
    axiosWithAuth()
      .put(`https://luncher-backend.herokuapp.com/api/admin/school`, {
        fundsNeeded: this.state.fundsNeeded + this.state.addedFunds
      })
      .then(res => {
        console.log(res);
        this.setState({
          addedFunds: 0,
          fundsNeeded: this.state.fundsNeeded + this.state.addedFunds
        });
      })
      .catch(err => console.log(err));
  };


  deleteUser = () => {
    console.log(this.state);
    axiosWithAuth()
    // check url /school(cs)?
      .delete(`https://luncher-backend.herokuapp.com/api/admin/`, {
      })
      .then(res => {
        console.log(res);
        this.setState({
          
        });
      })
      .catch(err => console.log(err));
  };




  render() {
    console.log(this.state.schoolName);
    return (
      <div className="Admin">
        <h1>Your School Account</h1>
        <p>
          School: {this.state.schoolName} {this.state.state}, {this.state.zip}
        </p>
        <p>Need: {this.state.fundsNeeded}</p>
        <p>Received: {this.state.fundsReceived}</p>
        <p>Status: {this.state.message}</p>

        <br />
        <div className="form-container">
          <h4>Update your needs:</h4>
          <form>
            <input
              type="number"
              name="addedFunds"
              placeholder="Funds Needed"
              value={this.state.addedFunds}
              onChange={this.handleChange}
            />

            <br />
            <button type="button" onClick={this.addFunds}>
              Request Funds
            </button>
          </form>
          <button type="button" onClick={this.deleteUser}>
              Delete User
            </button>
        </div>
      </div>
    );
  }
}

export default Admin;
