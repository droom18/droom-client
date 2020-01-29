import React, { Component } from "react";
import axios from "axios";

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: []
    };
  }
  git;
  componentDidMount() {
    console.log(this.props);
    if (!this.props.isLoggedIn) {
      this.props.history.push("/credentials/loginRoutes");
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
        <h1 className="SchoolsH1">Participating Schools</h1>
        <ul>
          {this.state.schools.map(school => {
            return (
              <div key={school.id}>
                <li>
                  {school.schoolName}, {school.state}
                </li>
                <p>Need: {school.fundsNeeded}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Schools;
