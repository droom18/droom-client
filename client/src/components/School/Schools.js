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
    // if logged in then do this else go to create user
    // this.props.history? .push probably -- give route to the login page
    if (!this.props.isLoggedIn) {
      this.props.history.push("/");
    }
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
        <h1>Schools.js</h1>
        <ul>
          {this.state.schools.map(school => {
            {
              /* console.log(school) */
            }
            return (
              // <h3>{school}</h3>
              // <School
              // if logged in then go here if not go to login

              <h3>{school.schoolName}</h3>

              // />
            );
          })}
        </ul>
      </div>
    );
  }
}

// Schools.defaultProps = {
//  smurfs: [],
// };

export default Schools;
