import React, { Component } from "react";
import axios from "axios";

class DonationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: []
    };
  }

  componentDidMount() {
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
      <div className="Admin">
        <h1>Donation List</h1>
        <ul>
          {this.state.schools.map(school => {
            return (
              <div key={school.id}>
                <h3>{school.schoolName}</h3>
                <p>
                  State: {school.state}, {school.zip}
                </p>
                <p>Funds needed: {school.fundsNeeded}</p>
                <p>Contact: {school.contact}</p>
                <hr />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DonationList;
