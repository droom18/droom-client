import React from "react";
import LoginForm from "../LoginForm/index";
import NewUser from "../NewUser/NewUser";
import Schools from "../School/Schools";

const Login = (props) => {
  return (
    <div>
      <h1>Login Page</h1>
      <button>To Donate page link!</button>
      <LoginForm />
      {/* <NewUser /> */}
      {/* <Schools /> */}
    </div>
  );
};

export default Login;
