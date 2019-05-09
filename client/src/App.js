import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Schools from "../src/components/School/Schools";
import NewUser from "../src/components/NewUser/NewUser";
import Homepage from "../src/components/Homepage/Homepage";
import Admin from "./components/Admin/Admin";
import NewSchool from "./components/NewSchool/NewSchool";
import DonationList from "./components/DonationList/DonationList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      isLoggedIn: false
    };
  }

  login = cred => {
    axios
      .post(`https://luncher-backend.herokuapp.com/api/login`, cred)
      .then(response => {
        console.log({ token: response.data.token });
        localStorage.setItem("token", response.data.token);
        this.setState({ ...this.state, isLoggedIn: true });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      // <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div>
            <Route
              exact
              path="/credentials/loginRoutes"
              render={props => <Schools {...props} login={this.login} />}
            />
            <Route exact path="/" component={Homepage} />
            <Route
              exact
              path="/schools/schoolRoutes"
              render={props => (
                <Schools {...props} isLoggedIn={this.state.isLoggedIn} />
              )}
            />
            <Route path="/credentials/registerRoutes" component={NewUser} />
            <Route
              path="/admins/adminRoutes"
              render={props => (
                <Admin
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  schools={this.state.schools}
                />
              )}
            />
            <Route path="/donors/donorRoutes" component={NewSchool} />

            <Route
              path="/donations/donationRoutes"
              render={props => (
                <DonationList {...props} isLoggedIn={this.state} />
              )}
            />
            <Route
              path="/credentials/loginRoutes"
              component={props => <Login {...props} login={this.login} />}
            />
          </div>
        </header>
      </div>
      // </Router>
    );
  }
}
export default App;
