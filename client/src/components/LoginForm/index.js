import React from "react";
import axios from "axios";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    axios
      .post(`https://luncher-backend.herokuapp.com/api/login`, this.state)
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>This is the login form</h1>
        <form>
          Username:
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>

        {/* <button onClick={this.login}>Login </button> */}

        <button onClick={() => this.login(this.state)}>Login </button>
        <br />
      </div>
    );
  }
}

export default LoginForm;
