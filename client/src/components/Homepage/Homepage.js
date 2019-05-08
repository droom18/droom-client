import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm";

const Homepage = () => {
  return (
    <div>
      <p>This is the Homepage</p>
      <LoginForm />

      <Link className="sign-up" to="/credentials/registerRoutes">
        <button>Create profile</button>
      </Link>
    </div>
  );
};

export default Homepage;
