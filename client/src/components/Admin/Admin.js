import React, { Component } from "react";
import { axiosWithAuth } from "../../axios/axiosWithAuth";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      role: "admin"
    };
  }

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push("/credentials/loginRoutes");
    } else {
      axiosWithAuth()
        .get("https://luncher-backend.herokuapp.com/api/admin/school")
        .then(res => {
          console.log(res.data);
          if (
            res.data.message === "There is no school associated with this admin"
          ) {
            return (
              <h1>There are no school associated with this administrator</h1>
            );
          } else {
            this.setState({ schools: res.data });
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({ error: err });
        });
    }
  }

  render() {
    console.log("schools:", this.state.schools);
    return (
      <div className="Admin">
        <h1>Admin</h1>
        {this.state.schools &&
          this.state.schools.map(school => {
            return (
              <div> 
                {/* key={school.id}> */}
                <ul>
                  <li>
                    {school.schoolName} , {school.state},{school.fundsReceived}
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Admin;
