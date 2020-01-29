import React from "react";
import LoginForm from "../LoginForm/index";

const Login = props => {
  console.log({ login: props.login });
  return (
    <div>
      <h1>Login Page</h1>
      <button>To Donate page link!</button>

      <LoginForm login={props.login} />
    </div>
  );
};

export default Login;
