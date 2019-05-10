import React, { Component } from "react";
import { axiosWithAuth } from "../../axios/axiosWithAuth";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      fundsNeeded: "",
      fundsReceived: "",
      state: "",
      zip: "",
      message: "",
      addedFunds: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push("/credentials/loginRoutes");
    } else {
      axiosWithAuth()
        .get("https://luncher-backend.herokuapp.com/api/admin/school")
        .then(res => {
          // this.setState({ schools: res.data.school });
          console.log(res);
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
        fundsNeeded: "",
        fundsReceived: "",
        state: "",
        zip: "",
        message: ""
      });
    }
  }

  addFunds = money => {
    axiosWithAuth()
      // check api route
      .post(`https://luncher-backend.herokuapp.com/api/admin/school`, money)
      .then(res => {
        this.setState({ fundsNeeded: res.data.fundsNeeded });
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
              type="text"
              name="fundsNeeded"
              placeholder="Funds Needed"
              value={this.state.fundsNeeded}
              onChange={this.handleChange}
            />

            <br />
            <button
              type="button"
              onClick={() => this.addFunds(this.state.fundsNeeded)}
            >
              Request Funds
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin;
// {this.state.schools &&
//   this.state.schools.map(school => {
//     return (
//       <div>
//         {/* key={school.id}> */}
//         <ul>
//           <li>
//             {school.schoolName} , {school.state},{school.fundsReceived}
//           </li>
//         </ul>
//       </div>
//     );
//   })}
