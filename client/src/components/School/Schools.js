import React, { Component } from "react";
import axios from "axios";
// import School from './School';

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: []
    };
  }

  componentDidMount() {
    console.log(this.props.isLoggedIn)
    // if logged in then do this else go to create user
    // this.props.history? .push probably -- give route to the login page
    if (!this.props.isLoggedIn) {
      this.props.history.push("/");
    } else {
    axios
      .get("https://luncher-backend.herokuapp.com/api/schools")
      .then(res => {
        console.log(res.data);
        this.setState({ schools: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }
}

  addSchool = school => {
    axios
      .post("https://droom-buildweek-4-15-19.herokuapp.com/api/", school)
      .then(res => {
        this.setState({ schools: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  };

  render() {
    return (
      <div className="Schools">
        <h1>Participating Schools</h1>
        <ul>
          {this.state.schools.map(school => {
            return (
              // if logged in then go here if not go to login
              <div key={school.id}>
                <li>
                  {school.schoolName}, {school.state}
                </li>

                <hr />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Schools;
