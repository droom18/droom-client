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
      message: ""
    };
  }

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
          //   if (
          //     res.data.message === "There is no school associated with this admin"
          //   ) {
          //     return (
          //       <h1>There are no school associated with this administrator</h1>
          //     );
          //   } else {
          //     this.setState({ schools: res.data.schoolName });
          //   }
          // })
        })
        .catch(err => {
          console.log(err);
          this.setState({ error: err });
        });
    }
  }

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
