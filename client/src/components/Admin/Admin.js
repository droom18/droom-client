import React, { Component } from "react";
import { axiosWithAuth } from "../../axios/axiosWithAuth";
// import School from './School';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      role: "admin"
    };
  }

  componentDidMount() {
    // if logged in then do this else go to create user
    // this.props.history? .push probably -- give route to the login page
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
  // addSchool = school => {
  //   axios
  //     .post("https://droom-buildweek-4-15-19.herokuapp.com/api/", school)
  //     .then(res => {
  //       this.setState({ schools: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState({ error: err });
  //     });
  // };

  render() {
    console.log("schools:", this.state.schools);
    return (
      <div className="Admin">
        <h1>Admin</h1>
        {/* if (this.state.schools[0].length == 0)
        {<h1>There are no schools associated with this administrator.</h1>}
        else
        {} */}
        {/* {this.state && } */}

        {this.state.schools &&
          this.state.schools.map(school => {
            return (
              // if logged in then go here if not go to login
              <div key={school.id}>
                <ul>
                  <li>
                    {school.schoolName}, {school.state},{school.fundsReceived}
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    );
  }
}

// Schools.defaultProps = {
//  smurfs: [],
// };

export default Admin;
